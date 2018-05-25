$(document).ready(function() {

  // store the branch name from the page title
  var branch = $('h1').text();

  // check each event to see if the location matches the branch Name
  // if not, remove it from the DOM
  $('#events .list-group-item').each(function() {
    if ($(this).children('.event-location').text() !== branch) {
      $(this).remove();
    }
  });

  if ( $('#all-events .list-group-item').length ===0 ) {
    // if the list of events is empty show a message instead of the list
    $('<p>There are no upcoming events at this branch</p>').appendTo('#events');
  } else {
    $('#all-events .list-group').insertAfter('#events > h2');
  }

  // clean up the DOM around the event list
  $('#events > .row').remove();
  //unhide the list of Events
  $('#events').removeClass('hidden');

});
