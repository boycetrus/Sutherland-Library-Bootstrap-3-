//@codekit-prepend "jquery.cookie.js";

$(document).ready(function() {
  $('.form-bootstrap .form-group label').addClass('control-label col-sm-3');
  $('.form-bootstrap .form-group input').addClass('form-control');
  $('.form-bootstrap .form-group select').addClass('form-control');
  $('.form-bootstrap label > .se-form-required-text').addClass('sr-only');
  $('#ctl05_rpControls_ctl08_fiControl_se_form').attr('type','date');
  $('.form-bootstrap .button-group input[type=submit]').addClass('btn btn-default hidden-print');
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

});
