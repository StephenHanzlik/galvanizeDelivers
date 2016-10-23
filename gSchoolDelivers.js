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
var subTotalArr = [];


buyBurger.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceBurger));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  $('#subTotal').empty()
  $('#subTotal').append((("$"+ subReduced)));

});

var buyArugula = $('#buyArugula ');
var priceArugula = $('#priceArugula').text();



//Old Method before adding numbers in array 
// buyArugula.on('click', function() {
//   var itemPrice = parseFloat(priceConvert(priceArugula));
//   var cartSubTotal = parseFloat(priceConvert(subTotalText));
//   var appendTotal = itemPrice + cartSubTotal;
//   //append subtotal
//   $('#subTotal').empty();
//   $('#subTotal').append((("$"+ appendTotal)));
// });



});
