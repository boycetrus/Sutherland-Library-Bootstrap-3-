//@codekit-prepend "flickity.pkgd.js";

$('document').ready(function() {

  // gDocId  and postTitle are entered as part of the page template because the values for the
  // Google spreadsheet ID and post title are taken from the page metadata in the CMS
  var API_KEY = "[GOOGLE SHEETS API KEY]";
  var jsonSource = "https://sheets.googleapis.com/v4/spreadsheets/" + gDocId + "/values/Sheet1?key=" + API_KEY;
  var $booklist = $("#book-list");
  var $carouselnav = $("#carouselNav");
  var $carouselinfo = $("#carouselInfo");

  //fetch the json feed
    $.getJSON( jsonSource, function() {
      console.log("json request success");
    })
    .done(function(data) {
      if (data.values.length < 2) {
        // if the json request is successful but there are no items
        $("<p class='text-danger'>JSON request succeeded but no data returned.</p>").prependTo($booklist);
      } else {
        console.log(data);
        var isbn, title, description, bib;
        var rows = data.values;
        var numberOfRows = rows.length, i;

        // loop through each row of the spreadsheet but skip row 1 (i=0) as it contains the column headings
        for (i = 1; i < numberOfRows; i++) {
          var row = rows[i];
          var fields = row.length, k;
          for (k = 0; k < fields; k++) {
            title = row[0]; 
            description = row[1];
            oldBib = row[2];
            bib = oldBib.slice(1, 8); //split string to remove b prefix
            isbn = row[3];
          }
          var $bookcover = "<img src='https://secure.syndetics.com/index.aspx?isbn=" + isbn + "/mc.gif&ampupc=&ampclient=sutherland&amptype=unbound' alt='" + title + "' />";
          var $bookinfo = "<div class='carousel-cell book-detail'><h4>" + title + "</h4><p>" + description + "</p><p><a class='btn btn-success' target='_blank' href='https://suth.ap.iiivega.com/search/card?recordId=" + bib + "'>Get It</a></p></div>";
          $carouselnav.append($bookcover);
          $carouselinfo.append($bookinfo);   
        }
        
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
