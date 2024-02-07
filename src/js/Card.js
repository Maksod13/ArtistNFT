import $ from 'jquery';
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
      updateCardTitle(cardIdUrl); // Вызываем функцию для обновления заголовка
    },
    error: function (error) {
      console.error('Ошибка при получении данных', error);
    },
  });
}

function displayCardImg(data) {
  $('#card__info--img').empty();
  $('#card__info--img').append(
    '<img src="' + data.attributes.image.data.attributes.url + '"/>'
  );
}

function updateCardTitle(cardIdUrl) {
  let titleElement = $('.purchase__about--title');
  titleElement.text('Item ' + cardIdUrl);
}

window.changeForm = function (formType) {
  $(document).ready(function () {
    $('.form').hide();
    $('.form__btn--btn').removeClass('active');
    $('#' + formType + 'Form').show();
    $('.form__btn--btn[data-type="' + formType + '"]').addClass('active');
  });
};
$(document).ready(function () {
  const getData = new URLSearchParams(window.location.search);
  const cardIdUrl = getData.get('itemId');
  loadCardData(cardIdUrl);
});
