//@codekit-prepend "handlebars-v4.0.5.js";
//@codekit-prepend "owl.carousel.js";

var emptyBookInfo = function() {
  $('#bookData .info').empty();
  $('#bookData').removeClass('active');
  $('.book').removeClass('selected');
};

$('document').ready(function() {

  var $carousel = $('#bookCarousel');
  var jsonSource = "https://spreadsheets.google.com/feeds/list/" + gDocId + "/od6/public/values?alt=json";

  //fetch the json feed
  $.getJSON( jsonSource, function() {
    console.log("json request success");
  })
  .done(function(data) {
    if (data.feed.entry.length === 0) {
      //if the json request is successful but there are no items
      $("<p class='text-danger'>JSON request succeeded but no data returned.</p>").prependTo($carousel);
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
      $("#bookCarousel").html(result);

      //generate the carousel
      $carousel.owlCarousel({
        margin:10,
        stagePadding: 60,
        nav:true,
        navText: ['<svg viewBox="0 0 32 32"><path fill="#fff" d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path><path fill="#fff" d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path></svg>','<svg viewBox="0 0 32 32"><path fill="#fff" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path><path fill="#fff" d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path></svg>'],
        //navText: ['<i data-icon="&#xe027;"></i>','<i data-icon="&#xe025;"></i>'],
        dots: false,
        responsive:{
          0   : {items:1},
          430 : {items:2},
          550 : {items:3},
          680 : {items:4},
          810 : {items:5},
          940 : {items:6},
          992 : {items:4},
          1000: {items:5},
          1140: {items:6},
          1200: {items:4},
          1330: {items:5},
          1470: {items:6},
          1600: {items:7},
          1730: {items:8},
          1860: {items:9},
          2000: {items:10}
        }
      });
      $('.book').on('click', function(e) {
        $('.book').removeClass('selected');
        $(this).addClass('selected');
        $('.book-data > .info').empty();
        $('.book-data').removeClass('active');
        $(this).children('.book-detail').clone(true).appendTo('.book-data .info');
        $('.book-data .info .book-detail').removeClass('sr-only');
        $('.book-data').addClass('active');
        e.preventDefault();
      });

      $('.book-data .close').on('click', function() {
        emptyBookInfo();
      });
      $('.owl-nav > div').on('click', function() {
        emptyBookInfo();
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
