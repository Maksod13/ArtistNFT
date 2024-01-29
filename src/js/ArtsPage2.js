import $ from 'jquery';

$.ajax({
  url: 'https://strapi-demo-app-ku48.onrender.com/api/cardcontents?populate=*',
  method: 'GET',
  contentType: 'application/json',
  success: function (response) {
    response.data.forEach(function (card, i) {
      let artsImgContainer = $('<div class="arts__inner--card"></div>');
      let artsCardHover = $('<div class="arts__card--hover"></div>');
      let artsCardHoverInner = $('<div class="arts__hover--inner"></div>');
      let artsCardHoverButton = $('<div class="arts__hover--btn"></div>');
      artsImgContainer.append(
        '<img src="' + card.attributes.image.data.attributes.url + '"/>'
      );
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
        ' <button class="hover__btn--buy"><a href="">Buy</a></button>'
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

      artsCardHover.append(artsCardHoverInner);
      artsCardHover.append(artsCardHoverButton);
      artsImgContainer.append(artsCardHover);

      if (i == 0 || i == 6) {
        artsImgContainer.addClass('full-width');
      }

      artsImgContainer.hover(
        function () {
          artsCardHover.css('display', 'flex');
        },
        function () {
          artsCardHover.css('display', 'none');
        }
      );
      $('#arts__content--inner').append(artsImgContainer);
    });
  },
  error: function (error) {
    console.error('Ошибка при получении данных', error);
  },
});
