function searchCatalogue() {
  var baseUrl = "https://encore.sutherlandshire.nsw.gov.au/iii/encore/search/C__S";
  var searchTerm = $('#catalog-search-textbox').val();
  var destination = baseUrl + searchTerm;
  //when catalogue search is submitted fetch the new url
  window.location.href = destination;
}

$(document).ready(function() {

  $('#catalog-search-btn').on('click', function(event) {
    event.preventDefault();
    searchCatalogue();
  });

  $('#catalog-search-textbox').keydown(function(event){
    if (event.which === 13) {
      event.preventDefault();
      searchCatalogue();
    }
  });

});
