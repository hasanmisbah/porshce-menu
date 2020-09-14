    let dataModel = '';
    $(function () {
        $('.menu-item a.menu-text').hover(function () {
            $('.menu-models').removeClass('active');
            $(this).siblings('.menu-models').addClass('active');
            $('.menu-item-second-level').first().children('.navigation').addClass('active');
            $('.menu-item-second-level').first().children('a.text').addClass('active');
            $('.navigation.active').find('a.menu-item-third-level-text').first().addClass('active');
            if ($(this).parent().hasClass('has-no-third')) {
                $(this).parent().children('.menu-models').find('.tech-data-container', '.tech-data').addClass('active');
            };
        });

        $('.menu-items-wrapper').mouseleave(function () {
            $('.menu-models').removeClass('active');
            $('.menu-item-second-level').first().children('a.text').removeClass('active');
            $('.navigation.active').find('a.menu-item-third-level-text').first().removeClass('active');
        });

        $('.menu-item-second-level a.text').hover(function () {
            $('.menu-item-second-level').children('.navigation').removeClass('active');
            $('.menu-item-second-level').first().children('a.text').removeClass('active');
            $('.navigation.active').find('a.menu-item-third-level-text').first().removeClass('active');
            $('.menu-item-second-level').first().children('a.text').removeClass('active');
            $('.menu-item-second-level').children('a.text').removeClass('active');
            $(this).siblings('.navigation').addClass('active');
            $(this).siblings('.navigation').find('a.menu-item-third-level-text').first().addClass('active');
        });

        $('a.menu-item-third-level-text').hover(function (e) {
            $('.menu-item-second-level a.text').removeClass('active');
            $(this).parents('.menu-item-second-level').find('a.text').addClass('active');
            dataModel = $(this).data().model;
            $('a.menu-item-third-level-text').removeClass('active');
            $(this).addClass('active');
            $('.tech-data').removeClass('active');
            $(`[data-id="${dataModel}"]`).addClass('active');
        });

    });