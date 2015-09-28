$(document).ready(function() {

$('.loader').on('click', function(event) {
  $('.new-items-data').hide();
  $('.new-items-fail').hide();
  $('.loading').fadeIn('fast');

  //call the function that generates the list
  populateList($(this).data('feed'), $(this).text(), $(this).attr('href'));
  //prevent the default action on the link in the btn
  event.preventDefault();
});

var populateList = function(feedName, feedTitle, extUrl) {
  var xmlSource = 'http://webpac.sutherlandshire.nsw.gov.au/feeds/' + feedName + '.xml';
  var jsonSource = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwebpac.sutherlandshire.nsw.gov.au%2Ffeeds%2F" + feedName + ".xml'&format=json&diagnostics=true&callback=?";
  var emailSource = 'http://feedburner.google.com/fb/a/mailverify?uri=SutherlandShireLibraries' + feedName + '&loc=en_US';
  var fallbackURL = extUrl;

  var newItemsFail = function() {
    $('.loading').fadeOut('fast');
    document.location.href = fallbackURL;
  };

  //fetch the json feed
  $.getJSON(jsonSource, function() {
    console.log('json request:' + jsonSource);
    console.log('success');
  })

  .done(function(data) {
    console.log('retrieved JSON data');
    $('.loading').hide();
    $('#newItemsData > h2').text(feedTitle);
    $('#emailSubscribe').attr('href', emailSource);
    $('#rssSubscribe').attr('href', xmlSource);
    $('#newItems').empty();

    //if there are items in the data generate an <li> for each
    // the test below should be data.query.count > 0 but causing a problem if there is only 1 result
    if (data.query.results.item.length > 0) {
      $.each(data.query.results.item, function(i, book) {
        var $title = book.title;
        var $webpac = book.link;
        var $description = book.description;
        var $bib = $webpac.toString().substring(48,56);
        var $encore = 'http://encore.sutherlandshire.nsw.gov.au/iii/encore/record/C__R' + $bib;
        var $isbn = book.guid.content.split(' ', 1);

        if (book.description !== undefined) {
          $('<div class="panel panel-default" data-isbn="' +
            $isbn +
            '"><div class="panel-heading"><h3 class="panel-title"><a target="_blank" href="' +
            $encore +
            '">' +
            $title +
            '</a></h3></div><div class="panel-body">' +
            $description +
            '</div></div>').appendTo("#newItems");
        } else {
          $('<div class="panel panel-default" data-isbn="' +
            $isbn +
            '"><div class="panel-heading"><h3 class="panel-title"><a target="_blank" href="' +
            $encore +
            '">' +
            $title +
            '</a></h3></div></div>').appendTo("#newItems");
        }
      });
    } else {
      // if the json request is successful but there are no items
      console.log('no data retrieved');
      newItemsFail();
    }
    $('.new-items-data').fadeIn('slow');
  })

  .fail(function() {
    //if the fetch fails reveal the error alert .new-items-fail
    console.log('fail');
    newItemsFail();
  })

  .error(function() {
    //if the fetch fails reveal the error alert .new-items-fail
    console.log('error');
    newItemsFail();
  });

};

populateList('newadultfiction', 'New Fiction', '!');

});
