$(function () {
    let dataModel = '';
    $('.menu-item').hover(function (e) {

        //Remove if class exist
        $('.menu-models').removeClass('active');
        $('.menu-item a.menu-text').removeClass('active');
        $('.navigation-model > .menu-item-second-level:first-child > .navigation > .navigation-menu > .menu-item-third-level:first-child > a.menu-item-third-level-text').removeClass('active');
        $('.navigation-model > .menu-item-second-level:first-child > .tech-data-container > .tech-data:first-child').removeClass('active');

        //Add class active
        $(this).children('a.menu-text').addClass('active');
        $(this).children('.menu-models').addClass('active');
        $(this).find('.menu-item-second-level:first-child').children('a.text').addClass('active');
        $(this).find('.menu-item-second-level:first-child').children('.navigation').addClass('active');
        $('.navigation-model > .menu-item-second-level:first-child > .navigation > .navigation-menu > .menu-item-third-level:first-child', $(this))
            .children('a.menu-item-third-level-text').addClass('active');
        $('.navigation-model > .menu-item-second-level:first-child > .tech-data-container > .tech-data:first-child', $(this)).addClass('active');

    });
    $('.menu-item-second-level').hover(function (e) {
        if ($(this).closest('.menu-item').hasClass('has-no-third')) {
            if ($(this).data().model) {
                dataModel = $(this).data().model;
                $('.tech-data').removeClass('active');
                $('.tech-data[data-id=' + dataModel + ']').addClass('active');
            }
        }
        $('.menu-item-second-level').children('a.text').removeClass('active');
        $('.menu-item-second-level').children('.navigation').removeClass('active');
        $(this).children('a.text').addClass('active');
        $(this).children('.navigation').addClass('active');
        $(this).children('.tech-data-container').children('.tech-data:first-child').addClass('active');
        $(this).children('.navigation').children('.navigation-menu').children('.menu-item-third-level:first-child').children('a.menu-item-third-level-text').addClass('active');

    });
    $('.menu-item-third-level').hover(function (e) {
        $('a.menu-item-third-level-text').removeClass('active');
        $(this).children('a.menu-item-third-level-text').addClass('active');
        if ($(this).children('a.menu-item-third-level-text').data().model) {
            dataModel = $(this).children('a.menu-item-third-level-text').data().model;
            $('.tech-data').removeClass('active');
            $('.tech-data[data-id=' + dataModel + ']').addClass('active');
        }
    });

    $('.menu-items-wrapper').mouseleave(function () {
        $('.active').removeClass('active');
    });
});