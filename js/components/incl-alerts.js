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
    // remove class in from all .accordian-collapse
    $('#home-library-contact .accordion-body').removeClass('in');
    // add background color #f2dede to .accordian-heading
    $('#home-library-contact').addClass('hours-alert');
    // inject extra .accordian-group warning there are changes to normal hours
    $('.accordion-group.danger').removeClass('hide');
  }
// end library closure alert
});