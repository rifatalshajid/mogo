$(function () {


    /*counter start*/
    $('.counter_up').counterUp({
        time: 5000
    });
    /*counter end*/

    $('.slick_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow'
    });







});
