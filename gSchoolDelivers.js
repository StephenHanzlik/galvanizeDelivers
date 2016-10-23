$(document).ready(function(){
     $('.parallax').parallax();

     var cartAdd = function () {
       $(this)[0].replaceWith(".")
     }

     $('#burgerBuy').on('click', function () {
        $(this)[0].replaceWith("#price") 
     }





});
