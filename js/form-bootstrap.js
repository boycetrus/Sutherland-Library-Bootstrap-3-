$(document).ready(function() {
  $('.form-bootstrap .form-group label').addClass('control-label col-sm-3');
  $('.form-bootstrap .form-group input').addClass('form-control');
  $('.form-bootstrap .form-group textarea').addClass('form-control');
  $('.form-bootstrap .form-group select').addClass('form-control');
  $('.form-bootstrap label > .se-form-required-text').addClass('sr-only');
  $('.form-bootstrap .button-group input[type=submit]').addClass('btn btn-default');
  $('.form-bootstrap .form-error > a').addClass('text-danger');

   $('.form-error').each(function(i) {
    if ( $(this).children('a').length > 0) {
      $(this).parents('.form-group').addClass('has-error');
    }
  });

});
