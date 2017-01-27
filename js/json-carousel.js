$('document').ready(function() {

  var $carousel = $('#bookCarousel');
  var jsonSource = "https://spreadsheets.google.com/feeds/list/1emCiiEC9NIWPwG1Fb1Tgv3qKkE2nfzwQp8lD332AhnM/od6/public/values?alt=json";

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
        nav:true,
        navText: ['<i data-icon="&#xe027;"></i>','<i data-icon="&#xe025;"></i>'],
        dots: false,
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
    }
  })
  .fail(function() {
    console.log("JSON request fail");
  })
  .error(function() {
    console.log("JSON request error");
  });

});
