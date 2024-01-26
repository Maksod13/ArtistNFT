import $ from 'jquery';
$(document).ready(function () {
  const getData = new URLSearchParams(window.location.search);
  const cardIdUrl = getData.get('itemId');
  loadCardData(cardIdUrl);
});
function loadCardData(cardIdUrl) {
  $.ajax({
    url:
      'https://strapi-demo-app-ku48.onrender.com/api/cardcontents/' +
      cardIdUrl +
      '?populate=*',
    method: 'GET',
    contentType: 'application/json',
    success: function (response) {
      console.log(response);
      let data = response.data;
      displayCardImg(data);
    },
    error: function (error) {
      console.error('Ошибка при получении данных', error);
    },
  });
}

function displayCardImg(data) {
  $('#card__info--img').empty();
  $('#card__info--img')
    .empty()
    .append('<img src="' + data.attributes.image.data.attributes.url + '"/>');
}
