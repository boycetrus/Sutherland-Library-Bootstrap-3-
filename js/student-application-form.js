//@codekit-prepend "jquery.cookie.js";

$(document).ready(function() {
  $('#ctl05_rpControls_ctl06_fiControl_se_form').attr('type','email').attr('placeholder','eg. my.username@education.nsw.gov.au');
  $('#ctl05_rpControls_ctl08_fiControl_se_form').attr('type','date');
  $('#ctl05_rpControls_ctl15_fiControl_se_form').attr('disabled','disabled');
  $('#ctl05_rpControls_ctl18_fiControl_se_form').attr('disabled','disabled');
  $('#ctl05_rpControls_ctl21_fiControl_se_form').attr('disabled','disabled');
  $('<a id="printBtn" class="btn btn-primary" href="javascript:window.print();" role="button">Print</a> ').prependTo('.form-bootstrap .button-group');

  if ($.cookie('warning-modal') !== 'shown') {
    $('#studentWarning').modal('show');
    $.cookie('warning-modal', 'shown');
  }

  $('#studentWarning').on ('hidden.bs.modal', function() {
    $('#showWarning').removeClass('hidden');
  });

  $('#showWarning > .btn').on('click', function() {
    $('#studentWarning').modal();
  });

  var $submitSuccess = $('#ctl05_divPostFormMessage');
  if ($submitSuccess.length > 0) {
    $.removeCookie('warning-modal');
  }

});
