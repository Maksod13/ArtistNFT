import { append } from 'dom7';
import $ from 'jquery';
import Swiper from 'swiper';

function displayCards(dataArray) {

  // очищаємо контейнер зі слайдами
  $('.swiper-wrapper').empty();

  $.each(dataArray, function (index, obj) {
    const item = obj;

    let swiperSlide = $('<div class="swiper-slide"></div>');
    let cardDiv = $('<div class="cardNFT"></div>');
    let imageContainer = $('<div class="image__container"></div>');
    let footerCard = $('<div class="footer__card"></div>');

    cardDiv.append(
      '<h2 class="card__name"> ' + item.attributes.name + '</h2>'
    );
    cardDiv.append(imageContainer);
    imageContainer.append(
      '<img src="' + item.attributes.img.data.attributes.url + '"/>'
    );
    cardDiv.append(
      '<div class="card__title"> ' + item.attributes.title + '</div>'
    );
    cardDiv.append(
      '<p class="card__about">' + item.attributes.about + '</p>'
    );
    cardDiv.append(footerCard);
    footerCard.append(
      '<div class="card__price"> ' + item.attributes.price + '</div>',
      '<button type="button" class="button__card">Buy now</button>'
    );
    swiperSlide.append(cardDiv);

    $('.swiper-wrapper').append(swiperSlide);
  });

  // ----------------- SWIPER -----------------------

  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 3,
    // spaceBetween: 10,
    // loop: true,
  });


  let slides = document.querySelectorAll('.swiper-slide');

  // Додавання обробників подій на кожен слайд
  slides.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
      // Зміна активного слайда при натисканні
      swiper.slideTo(index);
    });
  });

}

$(function () {
  $.ajax({
    url: 'https://strapi-demo-app-ku48.onrender.com/api/cards?populate=*',
    method: 'GET',
    contentType: 'application/json',
    success: function (response) {
      let data = response.data;
      displayCards(data);
    },
    error: function (error) {
      console.error('Ошибка при получении данных', error);
    },
  });
})



