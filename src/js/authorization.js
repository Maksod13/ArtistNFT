import $ from 'jquery';
$(document).ready(function () {
  window.showLoginForm = function () {
    $('#loginForm').addClass('active');
    $('.authorization__buttons--login').addClass('active');
    $('#registerForm').removeClass('active');
    $('.authorization__buttons--register').removeClass('active');
  };
  window.showRegisterForm = function () {
    $('#loginForm').removeClass('active');
    $('.authorization__buttons--login').removeClass('active');
    $('#registerForm').addClass('active');
    $('.authorization__buttons--register').addClass('active');
  };

  $('#registerForm').submit(function (event) {
    event.preventDefault();
    let email = $('#registeremail').val();
    let password = $('#registerpassword').val();
    let username = $('#registerusername').val();
    let roles = $('input[name="role"]:checked')
      .map(function () {
        return $(this).val();
      })
      .get();
    $.ajax({
      url: 'https://strapi-demo-app-ku48.onrender.com/api/auth/local/register',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        email: email,
        password: password,
        username: username,
        roles: roles,
      }),
      success: function (response) {
        console.log('Пользователь успешно создан:', response);
        localStorage.setItem('jwtToken', response.jwt);
        window.location.href = 'index.html';
      },
      error: function (error) {
        console.error('Ошибка при создании пользователя:', error);
        let errorMessage = error.responseJSON.error.message;
        alert('Ошибка аутентификации: ' + errorMessage);
      },
    });
  });

  $('#loginForm').submit(function (event) {
    event.preventDefault();
    let email = $('#loginemail').val();
    let password = $('#loginpassword').val();

    $.ajax({
      url: 'https://strapi-demo-app-ku48.onrender.com/api/auth/local',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        identifier: email,
        password: password,
      }),
      success: function (response) {
        console.log('Успешная аутентификация:', response);
        localStorage.setItem('jwtToken', response.jwt);
        window.location.href = 'index.html';
      },
      error: function (error) {
        console.error('Ошибка при аутентификации:', error);
        let errorMessage = error.responseJSON.error.message;
        alert('Ошибка аутентификации: ' + errorMessage);
      },
    });
  });
});
