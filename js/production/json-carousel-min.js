$("document").ready(function(){var e=$("#bookCarousel"),o="https://spreadsheets.google.com/feeds/list/1emCiiEC9NIWPwG1Fb1Tgv3qKkE2nfzwQp8lD332AhnM/od6/public/values?alt=json";$.getJSON(o,function(){console.log("json request success")}).done(function(o){if(0===o.feed.entry.length)$("<p class='text-danger'>JSON request succeeded but no data returned.</p>").prependTo(e);else{console.log(o);var s=$("#bookTemplate").html(),t=Handlebars.compile(s),n=o,i=t({data:n});$("#bookCarousel").html(i),e.owlCarousel({margin:10,nav:!0,navText:['<i data-icon="&#xe027;"></i>','<i data-icon="&#xe025;"></i>'],dots:!1,responsive:{0:{items:1},400:{items:2},600:{items:3},800:{items:4},1e3:{items:5},1200:{items:6},1400:{items:7},1600:{items:8}}})}}).fail(function(){console.log("JSON request fail")}).error(function(){console.log("JSON request error")})});