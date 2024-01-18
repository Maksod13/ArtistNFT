import $ from 'jquery';
$(document).ready(function () {
  $.ajax({
    url: 'https://strapi-demo-app-ku48.onrender.com/api/cards?populate=*',
    method: 'GET',
    contentType: JSON,
    success: function (responseData) {
      console.log(responseData);
      responseData.data.forEach(function (item) {
        let cardDiv = $('<div id="cardNFT"></div>');
        let imageContainer = $('<div id="image__container"></div>');
        let footerCard = $('<div id="footer__card"></div>');
        // let buttonCard = $('<button type="button" id="button__card"></button>');
        $('#content').append(cardDiv);
        cardDiv.append(
          '<h2 id="card__name"> ' + item.attributes.name + '</h2>'
        );
        cardDiv.append(imageContainer);
        imageContainer.append(
          '<img src="' + item.attributes.img.data.attributes.url + '"/>'
        );
        cardDiv.append(
          '<div id="card__title"> ' + item.attributes.title + '</div>'
        );
        cardDiv.append('<p id="card__about">' + item.attributes.about + '</p>');
        cardDiv.append(footerCard);
        footerCard.append(
          '<div id="card__price"> ' + item.attributes.price + '</div>',
          '<button type="button" id="button__card">Buy now</button>'
        );
      });
    },
    error: function (error) {
      console.error('Ошибка при получении данных', error);
    },
  });
});

//  url: 'https://strapi-demo-app-ku48.onrender.com/admin/apicards/?populate=*'
