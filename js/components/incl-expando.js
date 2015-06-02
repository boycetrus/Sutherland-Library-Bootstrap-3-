$(document).ready(function() {

// expando - extends bootstrap collapse
  $('#toggleExpando').removeClass('hidden');

  $('.expando .collapse').removeClass('in');
  $('.btn-show').click(function(){
    $('.expando .collapse').collapse('show');
    $('.expando > h2 > a').removeClass('collapsed');
    $('.btn-show').addClass('hidden');
    $('.btn-hide').removeClass('hidden');
  });
  $('.btn-hide').click(function(){
    $('.expando .collapse').collapse('hide');
    $('.expando > h2 > a').addClass('collapsed');
    $('.btn-hide').addClass('hidden');
    $('.btn-show').removeClass('hidden');
  });
// end expando

});