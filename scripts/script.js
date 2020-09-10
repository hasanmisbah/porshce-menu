$(function () {

    $('.menu-item a').mouseenter(function () {
        $('.menu-models').addClass('active');
        $('.menu-item-second-level').first().children('.navigation').addClass('active');
    });

    $('.menu-items-wrapper').mouseleave(function () {
        $('.menu-models').removeClass('active');
    });

    $('.menu-item-second-level a.text').hover(function () {
            $('.menu-item-second-level').children('.navigation').removeClass('active');
            $(this).siblings('.navigation').addClass('active');
        },

    );
});