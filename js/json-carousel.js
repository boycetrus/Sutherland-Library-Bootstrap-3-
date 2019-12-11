//@codekit-prepend "handlebars-v4.0.5.js";
//@codekit-prepend "flickity.pkgd.js";


$('document').ready(function() {

  // gDocId is entered as part of the page template because the value for the
  // Google spreadsheet ID is taken from the page metadata in the CMS
  
  var jsonSource = "https://spreadsheets.google.com/feeds/list/" + gDocId + "/od6/public/values?alt=json";
  var $booklist = $('#book-list');

  //fetch the json feed
    $.getJSON( jsonSource, function() {
      console.log("json request success");
    })
    .done(function(data) {
      if (data.feed.entry.length === 0) {
        //if the json request is successful but there are no items
        $("<p class='text-danger'>JSON request succeeded but no data returned.</p>").prependTo($booklist);
      } else {
        console.log(data);
        // Handlebars compiles the template into a callable function
        var template = $("#bookTemplate").html();
        // call the compiled function with the template data
        var renderer = Handlebars.compile(template);
        //data from the ajax call as an array
        var context = data;
        //wrap the context array in an object and create html
        //this is the bit that goes wrong depending on whether the json is an object or an array
        var result = renderer({data:context});

        //populate the #book-list with the resulting html
        $("#book-list").html(result);

        $('.carousel-nav').flickity({
          asNavFor: ".carousel-main",
          contain: true,
          pageDots: false,
          prevnextButtons: true,
          imagesLoaded: true,
          percentPosition: false
        });

        $('.carousel-main').flickity({
          pageDots: true,
          prevNextButtons: false
        });
      }
    })
    .fail(function() {
      console.log("JSON request fail");
    })
    .error(function() {
      console.log("JSON request error");
  });

});
