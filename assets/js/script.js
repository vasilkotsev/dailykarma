$(document).ready(function () {

    /* Hamburger menu icon */

    let menu = $('.menu');
    let header = $('#header');
    let hamburger = header.find('.hamburger');


    hamburger.on('click', function () {
        $(this).toggleClass('hamburger--stand is-active');
        menu.toggleClass('active');
    });


    $('#header nav .menu hamburger').on('click', function (e) {
        e.preventDefault();
        menu.removeClass('active');
        hamburger.removeClass('hamburger--stand is-active');
    });


    /*Scroll event functionallity for fixed header */

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('header-fixed');
            $('header').removeClass('header-absolute');
            $('path#Fill-1').addClass('pink-fill-svg');
            $('path#Fill-1').removeClass('st0');
            $('#logo span, .menu a').addClass('pink-font-color');
            $('#logo span, .menu a').removeClass('white-font-color');
            $('.menu__button').addClass('pink-background-color');

        }

        else {
            $('header').removeClass('header-fixed');
            $('header').addClass('header-absolute');
            $('path#Fill-1').addClass('st0');
            $('path#Fill-1').removeClass('pink-fill-svg');
            $('#logo span, .menu a').addClass('white-font-color');
            $('#logo span, .menu a').removeClass('pink-font-color');
            $('.menu__button').removeClass('pink-background-color');
           
        }
    });

});
