import $, { event } from 'jquery';

$(document).ready(function () {
  const jwtToken = localStorage.getItem('jwtToken');
  if (jwtToken) {
    $('.authorization-link').hide();
    $('.logout-button').show();
  } else {
    $('.authorization-link').show();
    $('.logout-button').hide();
  }

  $('.logout-button').click(function () {
    localStorage.removeItem('jwtToken');
    window.location.href = 'authorization.html';
  });

  $('#auctionBtn').click(function (event) {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      window.location.href = 'Auction.html';
    } else {
      alert('Для участия в аукционе необходимо быть авторизованным.');
      event.preventDefault();
    }
  });
});
