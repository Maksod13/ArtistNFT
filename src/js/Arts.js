import $ from 'jquery';
function hoverCardLogIn(
  artsImgContainer,
  artsCardHover,
  artsCardHoverInner,
  artsCardHoverButton,
  id
) {
  artsCardHoverInner.append(
    '  <h4 class="hover__inner--title">Title of picture</h4>'
  );
  artsCardHoverInner.append(
    '<div class="hover__inner--about"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor ipsum dolor  </div>'
  );
  artsCardHoverInner.append(
    '  <span class="hover__inner--price">$100 322</span>'
  );
  artsCardHoverButton.append(
    ' <button class="hover__btn--buy"><a href="#">Buy</a></button>'
  );
  artsCardHoverButton.append(
    '<button class="hover__btn--view"><a href="#">View</a>' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">' +
      '<path d="M7.0001 13.5001L14.5901 13.5001L11.2901 16.7901C11.1018 16.9784 10.996 17.2338 10.996 17.5001C10.996 17.7664 11.1018 18.0218 11.2901 18.2101C11.4784 18.3984 11.7338 18.5041 12.0001 18.5041C12.2664 18.5041 12.5218 18.3984 12.7101 18.2101L17.7101 13.2101C17.8011 13.115 17.8725 13.0028 17.9201 12.8801C18.0201 12.6366 18.0201 12.3635 17.9201 12.1201C17.8725 11.9973 17.8011 11.8852 17.7101 11.7901L12.7101 6.79006C12.6171 6.69633 12.5065 6.62194 12.3847 6.57117C12.2628 6.5204 12.1321 6.49426 12.0001 6.49426C11.8681 6.49426 11.7374 6.5204 11.6155 6.57117C11.4937 6.62194 11.3831 6.69633 11.2901 6.79006C11.1964 6.88302 11.122 6.99362 11.0712 7.11548C11.0204 7.23734 10.9943 7.36805 10.9943 7.50006C10.9943 7.63207 11.0204 7.76278 11.0712 7.88464C11.122 8.00649 11.1964 8.11709 11.2901 8.21006L14.5901 11.5001L7.0001 11.5001C6.73489 11.5001 6.48053 11.6054 6.293 11.793C6.10546 11.9805 6.0001 12.2348 6.0001 12.5001C6.0001 12.7653 6.10546 13.0196 6.293 13.2072C6.48053 13.3947 6.73489 13.5001 7.0001 13.5001Z" fill="url(#paint0_linear_55_3547)"/>' +
      '<defs>' +
      '<linearGradient id="paint0_linear_55_3547" x1="17.1974" y1="13.6251" x2="7.49307" y2="12.8142" gradientUnits="userSpaceOnUse">' +
      '<stop stop-color="#68C9FF" />' +
      '<stop offset="0.994746" stop-color="#D1B5FF" />' +
      '</linearGradient>' +
      '</defs>' +
      '</svg></button>'
  );
  function viewCard(itemId, page) {
    window.location.href = page + '?itemId=' + itemId;
  }
  artsCardHoverButton.find('.hover__btn--view').click(function () {
    viewCard(id, 'Card.html');
  });
  artsCardHoverButton.find('.hover__btn--buy').click(function () {
    viewCard(id, 'Payment.html');
  });

  artsCardHover.append(artsCardHoverInner);
  artsCardHover.append(artsCardHoverButton);
  artsImgContainer.append(artsCardHover);
  artsImgContainer.hover(
    function () {
      setTimeout(function () {
        artsCardHover.css('display', 'flex');
      }, 300);
    },
    function () {
      setTimeout(function () {
        artsCardHover.css('display', 'none');
      }, 300);
    }
  );
}
function hoverCardLogOut(
  artsImgContainer,
  artsCardHover,
  artsCardHoverButton,
  artsCardHoverInner
) {
  artsCardHoverInner.append(
    '<h4 class="hover__locked--title">' +
      '<svg width="26.666748" height="33.333344" viewBox="0 0 26.6667 33.3333" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
      '<desc>Created with Pixso.</desc>' +
      '<defs/>' +
      '<path id="Vector" d="M21.6667 11.6667L21.6667 8.33333C21.6667 3.66667 18 0 13.3333 0C8.66675 0 5 3.66667 5 8.33333L5 11.6667C2.16675 11.6667 0 13.8333 0 16.6667L0 28.3333C0 31.1667 2.16675 33.3333 5 33.3333L21.6667 33.3333C24.5 33.3333 26.6667 31.1667 26.6667 28.3333L26.6667 16.6667C26.6667 13.8333 24.5 11.6667 21.6667 11.6667ZM8.33325 8.33333C8.33325 5.5 10.5 3.33333 13.3333 3.33333C16.1667 3.33333 18.3333 5.5 18.3333 8.33333L18.3333 11.6667L8.33325 11.6667L8.33325 8.33333ZM15.1667 22.5L15 22.6667L15 25C15 26 14.3333 26.6667 13.3333 26.6667C12.3333 26.6667 11.6667 26 11.6667 25L11.6667 22.6667C10.6667 21.6667 10.5 20.1667 11.5 19.1667C12.5 18.1667 14 18 15 19C16 19.8333 16.1667 21.5 15.1667 22.5Z" fill="#C8D2DC" fill-opacity="1.000000" fill-rule="nonzero"/>' +
      '</svg>' +
      'Content Locked' +
      '</h4>'
  );
  artsCardHoverInner.append(
    '<div class="hover__locked--about">Need Authorization</div>'
  );
  artsCardHoverButton.append(
    ' <button class="hover__lockedbtn--buy"><a href="#">Log In</a></button>'
  );
  artsCardHoverButton.append(
    '<button class="hover__lockedbtn--view"><a href="#">Sign up</a></button>'
  );
  function linkToLogIn(page) {
    window.location.href = page;
  }
  artsCardHoverButton.find('.hover__lockedbtn--view').click(function () {
    linkToLogIn('authorization.html');
  });
  artsCardHoverButton.find('.hover__lockedbtn--buy').click(function () {
    linkToLogIn('authorization.html');
  });
  artsCardHover.append(artsCardHoverInner);
  artsCardHover.append(artsCardHoverButton);
  artsImgContainer.append(artsCardHover);
  artsImgContainer.hover(
    function () {
      setTimeout(function () {
        artsImgContainer.find('img').css('filter', 'blur(2px)');
        artsCardHover.css({
          display: 'flex',
          background:
            'linear-gradient(135deg, rgb(255, 81, 184), rgb(62, 40, 227))',
          opacity: '0.9',
          transition: 'all 0.5s ease',
        });
      }, 300);
    },
    function () {
      setTimeout(function () {
        artsImgContainer.find('img').css('filter', 'blur(0)');
        artsCardHover.css({
          display: 'none',
          opacity: '0',
        });
      }, 300);
    }
  );
}

$.ajax({
  url: 'https://strapi-demo-app-ku48.onrender.com/api/cardcontents?populate=*',
  method: 'GET',
  contentType: 'application/json',
  success: function (response) {
    response.data.forEach(function (card, i) {
      let id = card.id;
      let artsImgContainer = $('<div class="arts__inner--card"></div>');
      let artsCardHover = $('<div class="arts__card--hover"></div>');
      let artsCardHoverInner = $('<div class="arts__hover--inner"></div>');
      let artsCardHoverButton = $('<div class="arts__hover--btn"></div>');

      artsImgContainer.append(
        '<img src="' +
          card.attributes.image.data.attributes.url +
          '" alt="Artwork"/>'
      );

      if (i == 1 || i == 5) {
        artsImgContainer.addClass('full-width');
      }

      if (localStorage.getItem('jwtToken')) {
        hoverCardLogIn(
          artsImgContainer,
          artsCardHover,
          artsCardHoverInner,
          artsCardHoverButton,
          id
        );
      } else {
        hoverCardLogOut(
          artsImgContainer,
          artsCardHover,
          artsCardHoverButton,
          artsCardHoverInner
        );
      }

      $('#arts__content--inner').append(artsImgContainer);
    });
  },
  error: function (error) {
    console.error('Ошибка при получении данных', error);
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const colorCircles = document.querySelectorAll('.color-circle');

  function selectColor(circle) {
    const circleColor = getComputedStyle(circle).getPropertyValue('--color');
    document.getElementById('colorValue').value = circleColor;
    updateColorCircles();
  }

  function updateColorCircles() {
    const colorInput = document.querySelector('.color-input');
    const colorValue = document.getElementById('colorValue').value;

    colorCircles.forEach((circle) => {
      const circleColor = getComputedStyle(circle).getPropertyValue('--color');
      if (circleColor === colorValue) {
        circle.classList.add('selected');
      } else {
        circle.classList.remove('selected');
      }
    });
  }

  colorCircles.forEach((circle) => {
    circle.addEventListener('click', function () {
      selectColor(circle);
    });
  });
});

const btn = document.querySelector('.promo__heading--btn');
btn.addEventListener('click', scrollToCustomSection);

function scrollToCustomSection() {
  const customSection = document.querySelector('.arts__custom');
  window.scrollTo({
    top: customSection.offsetTop,
    behavior: 'smooth',
  });
}
