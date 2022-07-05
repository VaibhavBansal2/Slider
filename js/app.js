$(document).ready(function(){

    $('.slider').slick({
        prevArrow:'.prev-btn',
        nextArrow:'.next-btn',
        dots:true,
        appendDots:'.slider-dots',
        fade:true,
        autoplay:true,
        autoplaySpeed:6000
    });

});