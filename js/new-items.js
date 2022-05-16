//@codekit-prepend "handlebars-v4.0.5.js";

$(document).ready(function () {

  function newItemsFail(webpacLink, feedName) {
    $('.loading').fadeOut('fast');
    $('<p id="fallbackLink">Try this Link instead: <a></a></p>').appendTo('#newItemsFail');
    $('#fallbackLink > a').attr('href', webpacLink).text(feedName);
    $('#newItemsFail').removeClass('hide');
  }

  function populateList(source, title) {
    var xmlSource = 'http://webpac.sutherlandshire.nsw.gov.au/feeds/' + source + '.xml';
    var jsonSource = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwebpac.sutherlandshire.nsw.gov.au%2Ffeeds%2F' + source + '.xml&api_key=[INSERT API KEY]&count=100&callback=';
    // find the rss2json API_Key at https://rss2json.com/me/api_key
    var emailSource = 'http://feedburner.google.com/fb/a/mailverify?uri=SutherlandShireLibraries' + source + '&loc=en_US';
    var fallbackURL = 'http://webpac.sutherlandshire.nsw.gov.au/screens/' + source + '.html';

    console.log("rss2json API Key must be added to code to test");

    //fetch the json feed
    $.getJSON(jsonSource, function () {
      console.log('json request:' + jsonSource);
      console.log('success');
    })

      .done(function (data) {
        // console.log(data);
        $('.loading').hide();
        $('#newItemsData > h2').text(title);
        $('#emailSubscribe').attr('href', emailSource);
        $('#rssSubscribe').attr('href', xmlSource);
        $('#newItems').empty();

        // check that there is data in the response and create html content using handlebars
        if (data.status === 'ok' && data.items.length > 0) {
          // loop through the data and remove the b from the recordId param in the link props before running Handlebars functions
          for (var i = 0; i < data.items.length; i++) {
            // var $link = data.items[i].link;
            // $link = $link.replace('recordId=b', 'recordId=');
            data.items[i].link = data.items[i].link.replace('recordId=b', 'recordId=');
          }
          console.log(data);
          // Handlebars compiles the template into a callable function
          var template = $('#bookTemplate').html();
          // call the compiled function with the template data
          var renderer = Handlebars.compile(template);
          //data from the ajax call as an array
          var context = data;
          //wrap the context array in an object and create html
          //this is the bit that goes wrong depending on whether the json is an object or an array
          var result = renderer({ data: context });

          //populate the #book-list with the resulting html
          $('#newItems').html(result);

          $('#newItems article').each(function () {
            // var $link = $(this).find('.media-heading a');
            // console.log($link);
            // var $encoreBib = $link.prop('href');
            // console.log($encoreBib);
            // // var $vegaBib = $encoreBib.replace('recordID=b', 'recordID=');
            // // console.log($vegaBib);
            // var $baseUri = $encoreBib.splice(0, 39);
            // var $bib = $encoreBib.splice(-7);
            // var $vegaUri = $baseUri + $bib;
            // console.log $vegaUri;
            // // $encoreUri = $vegaUri;
            var $cover = $(this).find('.feed-content img').addClass('media-object thumbnail');
            var $destination = $(this).children('.media-left');
            $destination.html($cover);
            $(this).find('.feed-content > a').remove();
          });

        } else {
          // if the json request is successful but there are no items
          console.log('no data retrieved');
          newItemsFail(fallbackURL);
        }

        $('.new-items-data').fadeIn('slow');
      })

      .fail(function () {
        //if the fetch fails reveal the error alert .new-items-fail
        console.log('fail');
        newItemsFail(fallbackURL);
      });

  }

  $('.loader').on('click', function (event) {

    var $feedName = $(this).data('feed');
    var $feedTitle = $(this).text();

    $('.new-items-data').hide();
    $('.new-items-fail').hide();
    $('.loading').fadeIn('fast');

    //call the function that generates the list
    populateList($feedName, $feedTitle);
    //prevent the default action on the link in the btn
    event.preventDefault();
  });

  populateList('newadultfiction', 'New Fiction');

});
