$(document).ready(function() {

//hide recurring events from all events list
  $('<div class="toggle-events"><a id="toggle-events-btn">Hide Regular Events</a></div').appendTo('#all-events .dlv-search');

  //bind click event to button
  $('#toggle-events-btn').on('click', function () {
    var recurringEvents = $('#all-events .js-eventPattern');

  //adjust the btn text depending onthe visibility of recurring events
  if ( recurringEvents.is(':visible') ) {
      $('#toggle-events-btn').text('Show Regular Events');
    } else {
      $('#toggle-events-btn').text('Hide Regular Events');
    }

  //on.click hide all storytimes from list
    recurringEvents.slideToggle('1200');
  });
// end events

//show mulitple upcoming dates for recurring events
  //hide dates 2+ and show the toggle
  var $recurringDateEntry = $('.recurring-dates > .entry');
  var $firstDate = $recurringDateEntry.filter(':first');
  $('.entry + .entry').addClass('hidden');
  $('#multi-date-toggle').css('margin-left','0.5em').appendTo($firstDate).removeClass('hidden');
  //bind click to toggle
  $('#multi-date-toggle').on('click', function() {
    $recurringDateEntry.not(':first').toggleClass('hidden');
  });
//end multi-date-toggle

});
