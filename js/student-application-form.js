//@codekit-prepend "jquery.cookie.js";

$(document).ready(function() {
  $('.form-bootstrap .form-group label').addClass('control-label col-sm-3');
  $('.form-bootstrap .form-group input[type="text"]').addClass('form-control');
  $('.form-bootstrap .form-group select').addClass('form-control');
  $('.form-bootstrap label > .se-form-required-text').addClass('sr-only');
  $('#ctl05_rpControls_ctl06_fiControl_se_form').attr('type','email').attr('placeholder','eg. my.username@education.nsw.gov.au');
  $('#ctl05_rpControls_ctl08_fiControl_se_form').attr('type','date');
  $('#ctl05_rpControls_ctl15_fiControl_se_form').attr('disabled','disabled');
  $('#ctl05_rpControls_ctl18_fiControl_se_form').attr('disabled','disabled');
  $('#ctl05_rpControls_ctl21_fiControl_se_form').attr('disabled','disabled');
  $('.form-bootstrap .button-group input[type=submit]').addClass('btn-default');
  $('<a id="printBtn" class="btn btn-primary" href="javascript:window.print();" role="button">Print</a> ').prependTo('.form-bootstrap .button-group');
  $('.form-bootstrap .form-error > a').addClass('text-danger');

   $('.form-error').each(function(i) {
    if ( $(this).children('a').length > 0) {
      $(this).parents('.form-group').addClass('has-error');
    }
  });

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
