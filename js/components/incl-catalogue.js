$(document).ready(function() {

//catalog search - until srin can re-code
  $("#catalog-search label").text("Search the Collection");
  $('#ct103_btnSearchCatalogue').addClass('js-ga-tracking').attr(
      'data-ga-category','catalogue'
    ).attr(
      'data-ga-action','submit'
    ).attr(
      'data-ga-label','search'
    );
// end catalogue

});