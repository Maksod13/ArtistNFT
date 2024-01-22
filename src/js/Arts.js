import $ from 'jquery';

$.ajax({
  url: 'https://strapi-demo-app-ku48.onrender.com/api/cardcontents?populate=*',
  method: 'GET',
  contentType: 'application/json',
  success: function (response) {
    response.data.forEach(function (card, i) {
      let artsImgContainer = $('<div class="arts__inner--card"></div>');
      artsImgContainer.append(
        '<img src="' + card.attributes.image.data.attributes.url + '"/>'
      );
      if (i == 1 || i == 5) {
        artsImgContainer.addClass('full-width');
      }
      $('#arts__content--inner').append(artsImgContainer);
    });
  },
  error: function (error) {
    console.error('Ошибка при получении данных', error);
  },
});
