//@codekit-prepend "owl.carousel.js";

$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    dots: true,
    loop: false,
    autoplay: true,
    navText: ['<svg viewBox="0 0 32 32"><path fill="#fff" d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path><path fill="#fff" d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path></svg>','<svg viewBox="0 0 32 32"><path fill="#fff" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path><path fill="#fff" d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path></svg>'],
    responsive:{
      0:{
        items:1
      }
    }
  });

});
