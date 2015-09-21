$(document).ready(function() {
// compare event dates for alerts
  $(".alert-error > p").each(function() {
    var startdate = $(this).find(".event-starts").text();
    var enddate = $(this).find(".event-ends").text();
    if (enddate.length===0) {
      $(this).find(".event-ends").text(" ");
      $(this).find(".event-to").text(" until further notice");
    } else if (Date.parse(startdate) === Date.parse(enddate)) {
       $(this).find(".event-ends").text(" ");
       $(this).find(".event-to").text(" ");
    }
  });
// end compare event dates

// fade in alert-block
// with no delay  $("#alerts").addClass("in"); or use setTimeout to pause
  setTimeout(function(){ $("#alerts").addClass("in"); }, 200);
// end fade-in

// check for alert that is library closure
  if ( $('#alerts > p').hasClass('closure-notice') ) {
    $('#home-library-contact .panel-collapse').removeClass('in');
//    $('#home-library-contact .panel-default').removeClass('panel-default').addClass('panel-danger');
    $('#home-library-contact .closures-alert').removeClass('hide');
    $('#home-library-contact .closures-alert .panel-collapse').addClass('in');

  }
// end library closure alert
});
