$(document).ready(function () {

    /* Hamburger menu icon */

    var menu = $('.menu');
    var header = $('#header');
    var hamburger = header.find('.hamburger');


    hamburger.on('click', function () {
        $(this).toggleClass('hamburger--stand is-active');
        menu.toggleClass('active');
    });


    $('#header nav .menu hamburger').on('click', function (e) {
        e.preventDefault();
        menu.removeClass('active');
        hamburger.removeClass('hamburger--stand is-active');
    });

});