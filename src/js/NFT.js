import $ from 'jquery';
// $(document).ready(function () {
//   $.ajax({
//     url: 'https://strapi-demo-app-ku48.onrender.com/api/cards?populate=*',
//     method: 'GET',
//     contentType: JSON,
//     success: function (responseData) {
//       console.log(responseData);
//       responseData.data.forEach(function (item) {
//         let cardDiv = $('<div id="cardNFT"></div>');
//         let imageContainer = $('<div id="image__container"></div>');
//         let footerCard = $('<div id="footer__card"></div>');
//         $('#content').append(cardDiv);
//         cardDiv.append(
//           '<h2 id="card__name"> ' + item.attributes.name + '</h2>'
//         );
//         cardDiv.append(imageContainer);
//         imageContainer.append(
//           '<img src="' + item.attributes.img.data.attributes.url + '"/>'
//         );
//         cardDiv.append(
//           '<div id="card__title"> ' + item.attributes.title + '</div>'
//         );
//         cardDiv.append('<p id="card__about">' + item.attributes.about + '</p>');
//         cardDiv.append(footerCard);
//         footerCard.append(
//           '<div id="card__price"> ' + item.attributes.price + '</div>',
//           '<button type="button" id="button__card">Buy now</button>'
//         );
//       });
//     },
//     error: function (error) {
//       console.error('Ошибка при получении данных', error);
//     },
//   });
// });
$(document).ready(function () {
  const itemsPerPage = 12;
  let totalItems = 0;
  let currentPage = 1;
  let responseData;

  function displayCards(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    $('#content').empty();

    for (let i = startIndex; i < endIndex; i++) {
      const item = responseData.data[i];
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

      $('#content').append(cardDiv);
    }
  }
  function createPaginationButtons() {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    $('#pagination').empty();

    for (let i = 1; i <= totalPages; i++) {
      const button = $(
        '<button class="pagination-button" onclick="changePage(' +
          i +
          ')">' +
          i +
          '</button>'
      );
      if (i === currentPage) {
        button.addClass('active');
      } 
      $('#pagination').append(button);
    }
  }

  window.changePage = function (page) {
    currentPage = page;
    displayCards(currentPage);
  };

 

  $.ajax({
    url: 'https://strapi-demo-app-ku48.onrender.com/api/cards?populate=*',
    method: 'GET',
    contentType: 'application/json',
    success: function (response) {
      responseData = response;
      totalItems = responseData.data.length;
      displayCards(currentPage);
      createPaginationButtons();
    },
    error: function (error) {
      console.error('Ошибка при получении данных', error);
    },
  });
});

//  url: 'https://strapi-demo-app-ku48.onrender.com/admin/apicards/?populate=*'
