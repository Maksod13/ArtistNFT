import $ from 'jquery';

// $(function () {
//     $.ajax({
//         url: 'https://strapi-demo-app-ku48.onrender.com/api/cards/?populate=*',
//         method: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             $.each(data.data, function(index, obj) {
//                 let imgURL = obj.attributes.img.data.attributes.url;
//                 $('<img>').attr('src', imgURL).appendTo('.img-con');
//             });     
            
//             // При необхідності вивести на сторінку
//             // response.forEach(function(card) {
//             //     $('body').append('<p>' + JSON.stringify(card) + '</p>');
//             // });
//         },
//         error: function(error) {
//             console.error('Помилка запиту:', error);
//         }
//     });
// })
