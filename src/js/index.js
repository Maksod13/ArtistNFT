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

    cardDiv.append('<h2 class="card__name"> ' + item.attributes.name + '</h2>');
    cardDiv.append(imageContainer);
    imageContainer.append(
      '<img src="' + item.attributes.img.data.attributes.url + '"/>'
    );
    cardDiv.append(
      '<div class="card__title"> ' + item.attributes.title + '</div>'
    );
    cardDiv.append('<p class="card__about">' + item.attributes.about + '</p>');
    cardDiv.append(footerCard);
    footerCard.append(
      '<div class="card__price">' + item.attributes.price + '</div>',
      $('<button type="button" class="button__card">Buy now</button>').on(
        'click',
        function () {
          buyCard(item.id);
        }
      )
    );
    if (!localStorage.getItem('jwtToken')) {
      isLogged(cardDiv, imageContainer);
    }
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
function buyCard(cardId) {
  window.location.href = 'Auction.html?cardId=' + cardId;
}

function isLogged(cardDiv, imageContainer) {
  if (cardDiv) {
    let artsCardNftHover = $('<div class="nft__card--hover"></div>');
    let artsCardNftHoverInner = $('<div class="nft__hover--inner"></div>');
    let artsCardNftHoverButton = $('<div class="nft__hover--btn"></div>');
    artsCardNftHoverInner.append(
      '<h4 class="Nft__locked--title">' +
        '<svg width="26.666748" height="33.333344" viewBox="0 0 26.6667 33.3333" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
        '<desc>Created with Pixso.</desc>' +
        '<defs/>' +
        '<path id="Vector" d="M21.6667 11.6667L21.6667 8.33333C21.6667 3.66667 18 0 13.3333 0C8.66675 0 5 3.66667 5 8.33333L5 11.6667C2.16675 11.6667 0 13.8333 0 16.6667L0 28.3333C0 31.1667 2.16675 33.3333 5 33.3333L21.6667 33.3333C24.5 33.3333 26.6667 31.1667 26.6667 28.3333L26.6667 16.6667C26.6667 13.8333 24.5 11.6667 21.6667 11.6667ZM8.33325 8.33333C8.33325 5.5 10.5 3.33333 13.3333 3.33333C16.1667 3.33333 18.3333 5.5 18.3333 8.33333L18.3333 11.6667L8.33325 11.6667L8.33325 8.33333ZM15.1667 22.5L15 22.6667L15 25C15 26 14.3333 26.6667 13.3333 26.6667C12.3333 26.6667 11.6667 26 11.6667 25L11.6667 22.6667C10.6667 21.6667 10.5 20.1667 11.5 19.1667C12.5 18.1667 14 18 15 19C16 19.8333 16.1667 21.5 15.1667 22.5Z" fill="#C8D2DC" fill-opacity="1.000000" fill-rule="nonzero"/>' +
        '</svg>' +
        'Content Locked' +
        '</h4>'
    );
    artsCardNftHoverInner.append(
      '<div class="Nft__locked--about">Need Authorization</div>'
    );
    artsCardNftHoverButton.append(
      ' <button class="Nft__lockedbtn--buy"><a href="#">Log In</a></button>'
    );
    artsCardNftHoverButton.append(
      '<button class="Nft__lockedbtn--view"><a href="#">Sign up</a></button>'
    );
    function linkToLogIn(page) {
      window.location.href = page;
    }
    artsCardNftHoverButton.find('.Nft__lockedbtn--view').click(function () {
      linkToLogIn('authorization.html');
    });
    artsCardNftHoverButton.find('.Nft__lockedbtn--buy').click(function () {
      linkToLogIn('authorization.html');
    });
    artsCardNftHover.append(artsCardNftHoverInner);
    artsCardNftHover.append(artsCardNftHoverButton);
    $('#content').append(artsCardNftHover);
    cardDiv.hover(
      function () {
        artsCardNftHover.css('display', 'flex');
        imageContainer.css('z-index', '0');
        imageContainer.find('img').css('z-index', '0');
      },
      function () {
        artsCardNftHover.css('display', 'none');
      }
    );

    cardDiv.append(artsCardNftHover);
  }
}
$(function () {
  $.ajax({
    url: 'https://strapi-demo-app-ku48.onrender.com/api/cards?populate=*',
    method: 'GET',
    contentType: 'application/json',
    success: function (response) {
      let data = response.data;
      displayCards(data);
      if (!localStorage.getItem('jwtToken')) {
        isLogged();
      }
    },
    error: function (error) {
      console.error('Ошибка при получении данных', error);
    },
  });
});
