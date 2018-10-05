function hideQuestions() {
  $('#troubleshooting .question').addClass('hidden');
}

function resetTroubleshooting() {
  //reset the classes on the divs
  $('#troubleshooting .question .well').removeClass('in');
  var delay = setTimeout(hideQuestions, 1000);
}

$(function() {
  //start over
  $('.resetTS > .btn').on('click', function() {
    resetTroubleshooting();
  });

  // ask the first question
  $('#startTS').on('click', function() {
    $('#tryLogin').removeClass('hidden').children('.well').addClass('in');
  });

  // can they login with barcode/last 4 digits?
  $('#tryLogin .btn').on('click', function() {
    var $answer = $(this).text().toLowerCase();
    console.log($answer);
    if ($answer === "no") {
      $('#newUser').removeClass('hidden').children('.well').addClass('in');
    } else {
      $('#loginError').removeClass('hidden').children('.well').addClass('in');
    }
  });

  // wrong barcode or password error?
  $('#loginError .btn').on('click', function() {
    var $answer = $(this).text().toLowerCase();
    console.log($answer);
    if ($answer === "start over") {
      resetTroubleshooting();
    } else if ($answer === "yes") {
      $('#resetPassword').removeClass('hidden').children('.well').addClass('in');
    } else {
      $('#serverError').removeClass('hidden').children('.well').addClass('in');
    }
  });

  // login success. new user or not?
  $('#newUser .btn').on('click', function() {
    var $answer = $(this).text().toLowerCase();
    console.log($answer);
    if ($answer === "start over") {
      resetTroubleshooting();
    } else if ($answer === "yes") {
      $('#finishSetup').removeClass('hidden').children('.well').addClass('in');
    } else {
      $('#tryApp').removeClass('hidden').children('.well').addClass('in');
    }
  });

  //success or fail?
  $('#tryApp .btn').on('click', function() {
    var $answer = $(this).text().toLowerCase();
    console.log($answer);
    if ($answer === "start over") {
      resetTroubleshooting();
    } else if ($answer === "yes") {
      $('#solved').removeClass('hidden').children('.well').addClass('in');
    } else {
      $('#deadEnd').removeClass('hidden').children('.well').addClass('in');
    }
  });

  $('#resetPassword .btn').on('click', function() {
    var $answer = $(this).text().toLowerCase();
    console.log($answer);
    if ($answer === "start over") {
      resetTroubleshooting();
    } else if ($answer === "yes") {
      $('#solved').removeClass('hidden').children('.well').addClass('in');
    } else {
      $('#deadEnd').removeClass('hidden').children('.well').addClass('in');
    }
  });

  $('#finishSetup .btn').on('click', function() {
    var $answer = $(this).text().toLowerCase();
    console.log($answer);
    if ($answer === "start over") {
      resetTroubleshooting();
    } else if ($answer === "yes") {
      $('#solved').removeClass('hidden').children('.well').addClass('in');
    } else {
      $('#deadEnd').removeClass('hidden').children('.well').addClass('in');
    }
  });

});
