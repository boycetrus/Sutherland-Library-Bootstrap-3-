$(document).ready(function() {

  function newItemsFail(fallbackUrl) {
    $('.loading').fadeOut('fast');
    $('<p id="fallbackLink">Try this Link instead: <a></a></p>').appendTo('#newItemsFail');
    $('#fallbackLink > a').attr('href',fallbackURL).text(feedName);
    $('#newItemsFail').removeClass('hide');
  } // end newItemsFail

  function generatePanels(title, url, description, isbn, bibId) {
    if (description !== undefined) {
      $('<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title"><a target="_blank" href="' +
        url +
        '">' +
        title +
        '</a></h3></div><div class="panel-body"><p>' +
        description + '</p><p>' +
        '<a data-isbn="' +
        isbn +
        '" data-bib="' +
        bibId +
        '" data-url="' +
        url +
        '" data-title="' +
        title +
        '" href="#!">More Info</a></p></div></div>').appendTo("#newItems");
    } else {
      $('<div class="panel panel-default" data-isbn="' +
        isbn +
        '" data-bib="' +
        bibId +
        '"><div class="panel-heading"><h3 class="panel-title"><a target="_blank" href="' +
        url +
        '">' +
        title +
        '</a></h3></div><div class="panel-body"><p><a data-isbn="' +
        isbn +
        '" data-bib="' +
        bibId +
        '" data-url="' +
        url +
        '" data-title="' +
        title +
        '" href="#!">More Info</a></p></div></div>').appendTo("#newItems");
    }
    $('#newItems .panel-body a').addClass('fire-gbks btn btn-info');
  } // end generatePanels

  function populateList(feedName, feedTitle, extUrl) {
    var xmlSource = 'http://webpac.sutherlandshire.nsw.gov.au/feeds/' + feedName + '.xml';
    var jsonSource = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwebpac.sutherlandshire.nsw.gov.au%2Ffeeds%2F" + feedName + ".xml'&format=json&diagnostics=true&callback=?";
    var emailSource = 'http://feedburner.google.com/fb/a/mailverify?uri=SutherlandShireLibraries' + feedName + '&loc=en_US';

    //fetch the json feed
    $.getJSON(jsonSource, function() {
      console.log('json request:' + jsonSource);
      console.log('success');
    })
    //populate the Heading and subscribe links
    .done(function(data) {
      console.log('retrieved JSON data');
      $('.loading').hide();
      $('#newItemsData > h2').text(feedTitle);
      $('#emailSubscribe').attr('href', emailSource);
      $('#rssSubscribe').attr('href', xmlSource);
      $('#newItems').empty();

    //if there are items in the data generate an <li> for each
     if (data.query.count === 1) {
       var $title = data.query.results.item.title;
       var $webpac = data.query.results.item.link;
       var $description = data.query.results.item.description;
       var $isbn = data.query.results.item.guid.content.split(' ', 1);
       var $bib = $webpac.toString().substring(48,56);
       var $url = 'http://encore.sutherlandshire.nsw.gov.au/iii/encore/record/C__R' + $bib;
       generatePanels($title, $url, $description, $isbn, $bib);
     } else if (data.query.count > 1) {
       $.each(data.query.results.item, function(i, book) {
         var $title = book.title;
         var $webpac = book.link;
         var $description = book.description;
         var $isbn = book.guid.content.split(' ', 1);
         var $bib = $webpac.toString().substring(48,56);
         var $url = 'http://encore.sutherlandshire.nsw.gov.au/iii/encore/record/C__R' + $bib;
         generatePanels($title, $url, $description, $isbn, $bib);
       });
     } else {
       // if the json request is successful but there are no items
       console.log('no data retrieved');
       newItemsFail(extUrl);
     }
     $('.new-items-data').fadeIn('slow');
   })

    .fail(function() {
      //if the fetch fails reveal the error alert .new-items-fail
      console.log('fail');
      newItemsFail(extUrl);
    })

    .error(function() {
      //if the fetch fails reveal the error alert .new-items-fail
      console.log('error');
      newItemsFail(extUrl);
    });

  } // end populateList

  function gbksModal(bookIsbn, bookUrl, bookTitle) {

    var gbksData = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookIsbn;
    //var gbksTitle = bookTitle.split('/', 1)
    //console.log('prepare title for gbks lookup: ' + gbksTitle);

    $.getJSON(gbksData, function() {
      console.log('Google Books JSON request successful');
    })
    .done(function(data) {
      if (data.totalItems > 0) {
        console.log(data);

        var imgCheck = data.items[0].volumeInfo.imageLinks;
        var descCheck = data.items[0].volumeInfo.description;
        var snippetCheck = data.items[0].searchInfo;
        var gbksLink = data.items[0].accessInfo.webReaderLink;
        var imgSrc, gbksDescription;

        // check for a cover image and define the img src in a variable
        if (imgCheck !== undefined) {
          imgSrc = data.items[0].volumeInfo.imageLinks.thumbnail;
        } else {
          imgSrc = 'img/no-cover.png';
        }

        // check for a description or summary and define a variable to hold the description
        if (descCheck !== undefined) {
          gbksDescription = descCheck;
        } else if (snippetCheck !== undefined) {
          gbksDescription = snippetCheck.textSnippet;
        } else {
          gbksDescription = 'Houston, we have a problem; there\'s no summary on Google Books';
        }

        // append the book data to the modal that is stubbed out in the html
        $('.modal-header h4').text(bookTitle);
        $('.modal-body').empty();
        $('<div class="gbks-cover"><img id="coverImage" alt="cover image" /></div><div class="gbks-summary"><p id="isbn"></p><p id="summary"></p></div>').appendTo('.modal-body');
        $('#coverImage').attr('src', imgSrc);
        $('#isbn').text('ISBN: ' + bookIsbn);
        $('#summary').text(gbksDescription);
        $('.modal-footer .btn-success').text('Request it!').attr('href', bookUrl);
        $('.modal-footer .btn-default').removeAttr('disabled').attr('href', gbksLink);
        $('#bookDetails').modal();
      } else {
        console.log("Sorry, no information found for that book");
        // generate a link to the catalogue record
        var message = "Bad news friend. It looks like we could not get any extra information about that title. Best go straight to the Library Catalogue for more.";
        $('.modal-header h4').text(bookTitle);
        $('.modal-body').empty();
        $('.modal-body').html('<p id="message">' + message + '</p>');
        $('.modal-footer .btn-success').text('View Catalogue').attr('href', bookUrl);
        $('.modal-footer .btn-default').attr('disabled', 'disabled');
        $('#bookDetails').modal();
      }
    });
  }

  // call populateList to change the list data on click
  $('.loader').on('click', function(event) {
    $('.new-items-data').hide();
    $('.new-items-fail').hide();
    $('.loading').fadeIn('fast');

    var $feedId = $(this).data('feed');
    var $feedTitle =  $(this).text();
    var $extUrl = 'http://webpac.sutherlandshire.nsw.gov.au/screens/' + $feedId + '.html';
    
    //call the function that generates the list
    populateList($feedId, $feedTitle, $extUrl);
    //prevent the default action on the link in the btn
    event.preventDefault();
  });

  // load more info from google books into a modal on click
  $('#newItems').on('click', '.fire-gbks', function(event) {
    var $bookIsbn = $(this).data('isbn');
    var $bookUrl = $(this).data('url').toString();
    var $bookTitle = $(this).data('title');
    console.log($bookIsbn, $bookUrl, $bookTitle);

    gbksModal ($bookIsbn, $bookUrl, $bookTitle);

    event.preventDefault();
  });

  //pre-populate the page with data from the new fiction list
  populateList('newadultfiction', 'New Fiction');

});
