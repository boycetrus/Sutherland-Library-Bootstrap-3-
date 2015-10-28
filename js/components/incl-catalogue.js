function searchCatalogue() {
  var baseUrl = "http://encore.sutherlandshire.nsw.gov.au/iii/encore/search/C__S";
  var searchTerm = $('#catalog-search-textbox').val();
  var destination = baseUrl + searchTerm;
  window.location.href = destination;
}

$(document).ready(function() {

  $('#catalog-search-btn').on('click', function() {
    searchCatalogue();
  });

  $('#catalog-search-textbox').keydown(function(){
    if (event.which == 13) {
      searchCatalogue();
    }
  });

});
