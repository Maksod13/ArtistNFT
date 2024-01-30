import $ from 'jquery';
window.changeForm = function (formType) {
  // Используем jQuery для обеспечения выполнения кода после загрузки DOM
  $(document).ready(function () {
    // Скрываем все формы
    $('.form').hide();

    // Убираем активный класс у всех кнопок
    $('.form__btn--btn').removeClass('active');

    // Отображаем выбранную форму
    $('#' + formType + 'Form').show();

    // Добавляем активный класс к выбранной кнопке
    $('.form__btn--btn[data-type="' + formType + '"]').addClass('active');
  });
};
