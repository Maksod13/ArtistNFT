import $, { event } from 'jquery';

$(document).ready(function () {
  const jwtToken = localStorage.getItem('jwtToken');
  if (jwtToken) {
    $('.authorization-link').hide();
    $('.logout-button').show();
    $('.authorization-link2').hide();
    $('.logout-button2').show();
  } else {
    $('.authorization-link').show();
    $('.logout-button').hide();
    $('.authorization-link2').show();
    $('.logout-button2').hide();
  }

  $('.logout-button').click(function () {
    localStorage.removeItem('jwtToken');
    window.location.href = 'authorization.html';
  });

  $('.logout-button2').click(function () {
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
  $('#auctionBtn2').click(function (event) {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      window.location.href = 'Auction.html';
    } else {
      alert('Для участия в аукционе необходимо быть авторизованным.');
      event.preventDefault();
    }
  });
});
