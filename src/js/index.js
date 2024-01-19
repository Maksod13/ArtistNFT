import $ from 'jquery';
import Swiper from 'swiper';

$(function () {
    $.ajax({
        url: 'https://strapi-demo-app-ku48.onrender.com/api/cards/?populate=*',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $.each(data.data, function(index, obj) {
                let imgURL = obj.attributes.img.data.attributes.url;
                console.log(imgURL)
                // $('<img>').attr('src', imgURL).appendTo('.img-con');
            });     

        },
        error: function(error) {
            console.error('Помилка запиту:', error);
        }
    });
})


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
