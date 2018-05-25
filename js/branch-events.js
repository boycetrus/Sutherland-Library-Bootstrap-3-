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

  //unhide the list of Events
  $('#events').removeClass('hidden');
});
