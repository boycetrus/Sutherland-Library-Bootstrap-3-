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

});