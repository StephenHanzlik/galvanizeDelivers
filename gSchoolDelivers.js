"use strict";
$(document).ready(function() {
  $('.parallax').parallax();
  //
  // var cartAdd = function() {
  //     $(this)[0].replaceWith(".")
  // };
  //

//Converts price from text() to string with decimal
function priceConvert(rawPrice) {
  var arr = [];
  for (var i = 1; i < rawPrice.length; i++) {
    var digit = rawPrice.charAt(i);
    arr.push(digit);
  }
  return arr.join('');
};


var buyBurger = $('#buyBurger');
var priceBurger = $('#priceBurger').text();
var subTotalText = $('#subTotal').text();

buyBurger.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceBurger));
  var cartSubTotal = parseFloat(priceConvert(subTotalText));
  var appendTotal = itemPrice + cartSubTotal;
  //line does not append as expected
  $('#subTotal').empty();
  $('#subTotal').append((("$"+ appendTotal)));
  // $('#subTotal').append($('#priceBurger'));
});



});
