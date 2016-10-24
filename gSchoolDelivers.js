"use strict";
$(document).ready(function() {

  $('.parallax').parallax();

//Converts price from text() to string with decimal
function priceConvert(rawPrice) {
  var arr = [];
  for (var i = 1; i < rawPrice.length; i++) {
    var digit = rawPrice.charAt(i);
    arr.push(digit);
  }
  return arr.join('');
}

var buyBurger = $('#buyBurger');
var priceBurger = $('#priceBurger').text();
var buyArugula = $('#buyArugula');
var priceArugula = $('#priceArugula').text();
var buySwine = $('#buySwine');
var priceSwine = $('#priceSwine').text();
var buyIce = $('#buyIce');
var priceIce = $('#priceIce').text();
var submit = $('#submitToast');
var subTotalArr = [];
var cart = [];


buyBurger.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceBurger));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced * 0.1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);
  $('#table tr:last').after('<tr><td>Royale with Cheese</td><td class="right">$8.99</td></tr>');
  cart++;
});

buyArugula.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceArugula));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced * 0.1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);
  $('#table tr:last').after('<tr><td>Arugula Pie</td><td class="right">$11.99</td></tr>');
  cart++;
});

buySwine.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceSwine));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced * 0.1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);
  $('#table tr:last').after('<tr><td>Smoked Swine</td><td class="right">$14.99</td></tr>');
  cart++;
});

buyIce.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceIce));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced * 0.1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);
  $('#table tr:last').after('<tr><td>Ice Cream Biscuit</td><td class="right">$7.99</td></tr>');
  cart++;
});

submit.on('click', function () {
  if(cart > 0 ){
  Materialize.toast('Your Order Has Been Placed!', 4000, 'rounded');
} else {
  Materialize.toast('Please add an item to the cart', 4000, 'rounded');
}

});

});
