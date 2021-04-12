//@codekit-prepend "mixitup.js";

$(document).ready(function() {
  $('.storytime-list .mix').each(function () {
    var entryDate = $(this).find('.event-date > .entry').text();
    var session = $(this).find('.event-storytime').text();

    var eventDate = new Date(entryDate);
    var dayIndex = eventDate.getDay();
    $(this).attr('data-day', dayIndex);

    if (session === 'Storytime') {
      $(this).attr('data-age', '3');
    } else if (session === 'Together Time') {
      $(this).attr('data-age', '2');
    } else if (session === 'Rhymetime') {
      $(this).attr('data-age', '1');
    } 
  });

  $('#sessionChooser').on('click', function () {
    $('#sessionType').modal('toggle');
  });
});

var mixer = mixitup('.storytime-list');
