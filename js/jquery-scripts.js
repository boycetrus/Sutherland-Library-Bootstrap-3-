//@codekit-prepend "components/incl-alerts.js";
//@codekit-prepend "components/incl-catalogue.js";
//@codekit-prepend "components/incl-events.js";
//@codekit-prepend "components/incl-expando.js";
//@codekit-prepend "components/incl-listview.js";

$(document).ready(function() {

//set up google analytics event tracking based on data attributes
  $('.js-ga-tracking').on('click', function() {
    var category = $(this).data('ga-category');
    var action = $(this).data('ga-action');
    var label = $(this).data('ga-label');
    var value = $(this).data('ga-value');

    //check that analytics is installed and then send event
    if (typeof ga !== 'undefined') {
    		ga('send', 'event', category, action, label, value );
      } else if (typeof _gaq.push !== 'undefined') {
        _gaq.push([ '_trackEvent', category, action, label, value ]);
      } else {
      console.log("no google analytics here bro!");
    }

  });

// init autoModal - modal shows on page load for alerts
  $('#autoModal').modal('show');

// init tooltips and popovers
  $('.pop-over').popover();
  $('.tool-tip').tooltip();
// end popover

//  inject clearfix for thumbnails data list views:
//    with class visible-xs-block after every 2nd thumbnail
//    with class visible-sm-block after every 3rd thumbnail
//    with class visible-md-block visible-lg-block after every 4th thumbnail

  $('.col-md-3:nth-of-type(4n)').after('<p class="clearfix visible-md-block visible-lg-block"></p>');
  $('.col-sm-4:nth-of-type(3n)').after('<p class="clearfix visible-sm-block"></p>');
  $('.col-xs-6:nth-of-type(2n)').after('<p class="clearfix visible-xs-block"></p>');
  $('.col-sm-6:nth-of-type(2n)').after('<p class="clearfix visible-sm-block"></p>');

});
