import $ from 'jquery';
import Swiper from 'swiper';

$(document).ready(function () {
  let swiperWork = new Swiper('.swiper__work', {
    direction: 'horizontal',
    resizeObserver: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    initialSlide: 1,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });

  // // Обработчик события изменения слайда
  // $('.swiper__work').on('slideChange', function () {
  //   // Удаление класса active у всех внутренних линий
  //   $('.work__box--line-inner').removeClass('active');
  //   // Получение активного слайда
  //   var activeSlide = $('.swiper-slide-active');
  //   // Получение родительской линии
  //   var parentLine = activeSlide
  //     .closest('.work__container')
  //     .prev('.work__box--line');
  //   // Получение внутренней линии
  //   var innerLine = parentLine.find('.work__box--line-inner');
  //   // Добавление класса active для внутренней линии
  //   innerLine.addClass('active');
  // });
});

const countDownDate = new Date('Jan 1, 2025 00:00:00').getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance <= 0) {
    clearInterval(x);
    $('#timer').html('EXPIRED');
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    $('#timer').html(timeString);
  }
}, 1000);

$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = urlParams.get('cardId');
  loadCardData(cardId);
});

function loadCardData(cardId) {
  $.ajax({
    url:
      'https://strapi-demo-app-ku48.onrender.com/api/cards/' +
      cardId +
      '?populate=*',
    method: 'GET',
    contentType: 'application/json',

    success: function (response) {
      displayCard(response);
    },
    error: function (error) {
      console.error('Ошибка при получении данных', error);
    },
  });
}

function displayCard(cardData) {
  $('#cardContent')
    .empty()
    .append(
      '<img src="' + cardData.data.attributes.img.data.attributes.url + '"/>'
    );
}
