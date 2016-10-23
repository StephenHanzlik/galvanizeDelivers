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
var priceIce= $('#priceIce').text();
var subTotalText = $('#subTotal').text();
var subTotalArr = [];


buyBurger.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceBurger));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced * .1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);

});

buyArugula.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceArugula));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced * .1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);
});

buySwine.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceSwine));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced *.1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);
});

buyIce.on('click', function() {
  var itemPrice = parseFloat(priceConvert(priceIce));
  subTotalArr.push(itemPrice);
  var subReduced = subTotalArr.reduce(function(a, b) {
    return a + b;
    }, 0);
  var roundReduced = Math.round(subReduced * 100)/100;
  var roundTax = Math.round((subReduced*.1) * 100)/100;
  var total = roundReduced + roundTax;
  var roundTotal = Math.round((total) * 100)/100;
  $('#subTotal').empty();
  $('#subTotal').append("$"+ roundReduced);
  $('#tax').empty();
  $('#tax').append("$"+ roundTax);
  $('#total').empty();
  $('#total').append("$"+ roundTotal);
});

});
