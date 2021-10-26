function searchGale() {
  var baseUrl = "https://support.gale.com/widgets/search/?loc=sutherland&id=gps&q=";
  var searchTerm = $('#quicksearchInput').val();
  var destination = baseUrl + searchTerm;
  //when search is submitted fetch the new url
  window.location.href = destination;
}

$(document).ready(function () {

  $('#quickSearchBtn').on('click', function (event) {
    event.preventDefault();
    searchGale();
  });

  $('#quicksearchInput').keydown(function (event) {
    if (event.which === 13) {
      event.preventDefault();
      searchGale();
    }
  });

});
