import $ from 'jquery';
$('.premium__card ').removeClass('.active');
$('.premium__card ').hover(
  function () {
    $(this).addClass('active');
  },
  function () {
    $(this).removeClass('active');
  }
);
window.changeCard = function (premiumType) {
  $('.premium__card').hide();
  $('.premium__buttons--btn').removeClass('active');
  $('#' + premiumType).show();
  $('.premium__buttons--btn[data-type="' + premiumType + '"]').addClass(
    'active'
  );
};

$(document).ready(function () {
  function toggleCards() {
    let width = $(window).width();
    if (width <= 650) {
      $('.premium__card').hide();
      $('.premium__buttons--btn').removeClass('active');
      $('#premiumWeek').show();
      $('.premium__buttons--btn[data-type="premiumWeek"]').addClass('active');
    } else {
      $('.premium__card').show();
    }
  }

  toggleCards();

  $(window).resize(function () {
    toggleCards();
  });

  $('.premium__buttons--btn').click(function () {
    let type = $(this).data('type');
    $('.premium__buttons--btn').removeClass('active');
    $(this).addClass('active');
    $('.premium__card').hide();
    $('#' + type).show();
  });
  $('.subscribe__type').click(function () {
    // Удаляем класс active у всех кнопок
    $('.subscribe__type').removeClass('active');
    // Добавляем класс active к текущей кнопке
    $(this).addClass('active');
  });
});
