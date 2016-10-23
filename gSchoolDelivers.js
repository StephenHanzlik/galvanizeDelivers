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

buyBurger.on('click', function() {
    var itemPriceStr = priceConvert(priceBurger);
    var subtotal =

});



});
