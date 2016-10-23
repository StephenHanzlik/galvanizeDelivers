"use strict";
$(document).ready(function() {
  $('.parallax').parallax();
  //
  // var cartAdd = function() {
  //     $(this)[0].replaceWith(".")
  // };
  //
  $('#burgerBuy').on('click', function() {
  priceConvert($("#priceBurger"));

  }


function priceConvert() {
    var subtotalArr = [];
    for (var i = 1; i < rawPrice.length; i++) {
        var digit = rawPrice.charAt(i);
          subtotalArr.push(digit);
    }
    return subtotalArr.join('');
};


});
