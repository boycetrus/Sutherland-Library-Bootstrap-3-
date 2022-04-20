function searchCatalogue() {
  var baseUrl = "https://suth.ap.iiivega.com/search?searchType=everything&pageSize=10&query=";
  var searchTerm = $('#catalog-search-textbox').val();
  var destination = baseUrl + searchTerm;
  //when catalogue search is submitted fetch the new url
  window.open(destination, "_top");
}

$(document).ready(function () {

  $('#catalog-search-btn').on('click', function (event) {
    event.preventDefault();
    searchCatalogue();
  });

  $('#catalog-search-textbox').keydown(function (event) {
    if (event.which === 13) {
      event.preventDefault();
      searchCatalogue();
    }
  });

});
