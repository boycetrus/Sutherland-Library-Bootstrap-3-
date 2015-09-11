$('document').ready(function() {

  var $carousel = $('#book-carousel');

  $.getJSON('/js/json/booklist.json', function() {
    console.log('json request made');
  }) //json request
  .done(function(data) {
    console.log(data);

    $.each(data.entries, function(i, item) {
      var $imgSrc = item.cover_img;
      var $title = item.title;
      var $url = 'http://encore.sutherlandshire.nsw.gov.au/iii/encore/record/C__R' + item.id;
      var $author = item.author;
      var $isbn = item.isbn;

      $('<div class="item"><a target="_blank" title="' + $title +
        '" href="' + $url +
        '"><img src="' + $imgSrc +
        '" /><p class="sr-only">' + $title + ' by ' + $author +
         '</p></a></div>').appendTo($carousel);
    });  //each loop

    $carousel.owlCarousel({
      margin:10,
      nav:true,
      dots: true,
      loop: true,
      responsive:{
        0   : {items:1},
        400 : {items:2},
        600 : {items:3},
        800 : {items:4},
        1000: {items:5},
        1200: {items:6},
        1400: {items:7},
        1600: {items:8}
      }
    });
    $(".owl-nav > *").addClass("btn btn-default btn-xs");
  });
});
