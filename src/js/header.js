import $ from 'jquery';
$(document).ready(function () {
  // Проверяем наличие токена при загрузке страницы
  const jwtToken = localStorage.getItem('jwtToken');
  if (jwtToken) {
    // Если токен присутствует, скрываем кнопку "Authorization" и показываем кнопку "Log Out"
    $('.authorization-link').hide();
    $('.logout-button').show();
  } else {
    // Если токен отсутствует, скрываем кнопку "Log Out" и показываем кнопку "Authorization"
    $('.authorization-link').show();
    $('.logout-button').hide();
  }

  // Обработчик нажатия на кнопку "Log Out"
  $('.logout-button').click(function () {
    // Удаляем токен из локального хранилища
    localStorage.removeItem('jwtToken');
    // Перенаправляем пользователя на страницу авторизации (или другую страницу)
    window.location.href = 'authorization.html';
  });
});
