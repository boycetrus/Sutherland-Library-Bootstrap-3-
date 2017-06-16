//check for alert on property page and shift it to the top of the screen
function checkForAlerts() {
  var isAlerts = $('.page-wrap > #alerts');
  if (isAlerts) {
    //grab the paragraph from the alert in the hours tab and append it to the main alert
    console.log("isAlerts equals true");
  } else {
    $('#hours > #alerts').insertBefore('#banner');
  }
}

// check for notices with no end dates and update end date text
function untilFurtherNotice() {
  var isEndDate = $('.event-detail .interruption-date.end-date');
	  var endDateLength = isEndDate.text().length;
	  if (endDateLength === 7) {
	  	isEndDate.text('further notice');
	  }
}


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

  checkForAlerts();
  untilFurtherNotice();

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
