$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider').animate({opacity: 1}, 500);
    }, 500);

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
            $('.custom-select').find('ul').stop().fadeOut(0);
        }

        if(!$(event.target).closest('.ui-rangeSlider-label-value').length && !$(event.target).closest('.ui-rangeSlider-label-inner').length) {
            $('.ui-rangeSlider-label-value').removeClass('active');
            var min = $('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-inner input').val();
            var max = $('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-inner input').val();
            $(".filter-slider").rangeSlider("values", min, max);
        }

    });

    setTimeout(function() {
        $('.slider').animate({opacity: 1});
    }, 500);

    $('.photos-controls .photos-amount').html($('.object-slider .slide').length);

    /******************************************************************************************************************
     ******* custom select scripts
     ******************************************************************************************************************/

    $('.custom-select .current-value').click(function() {

        if(!$(this).parent().hasClass('active')) {
            $('.custom-select').removeClass('active');
            $(this).parent().addClass('active');
            $('.custom-select').find('ul').stop().fadeOut(0);
            $(this).siblings('ul').stop().fadeIn(0);
        } else {
            $('.custom-select').removeClass('active');
            $('.custom-select').find('ul').stop().fadeOut(0);
        }

    });

    $('.custom-select ul li').click(function() {

        var prevChoice = $(this).parents('.custom-select').find('.current-value').html();
        var currentChoice = $(this).html();
       
        if (!$(this).parents('.custom-select').hasClass('header-select')) {

            if(!$(this).hasClass('chosen')) {
                $('.custom-select ul li.chosen').removeClass('chosen');
                $(this).addClass('chosen');

                $(this).parents('.custom-select').find('.current-value').html(currentChoice);

                $(this).parents('.custom-select').find('input').attr('value', currentChoice);

                $(this).parents('.custom-select').removeClass('active');
                $(this).parents('.custom-select').find('ul').stop().fadeOut(0);
            }
        } else {

            $(this).parents('.custom-select').find('.current-value').html(currentChoice);
            $(this).parents('.custom-select').find('input').attr('value', currentChoice);
            $(this).html(prevChoice);

            $(this).parents('.custom-select').removeClass('active');
            $(this).parents('.custom-select').find('ul').stop().fadeOut(0);
        }
        
    });

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.more-filters').click(function() {
        $(this).parents('form').toggleClass('active');
    });

    $('.view-filter div').click(function() {
        if(!$(this).hasClass('active')) {

            $('.view-filter .active').removeClass('active');
            $(this).addClass('active');
            $('.products.active').removeClass('active');

            if($(this).hasClass('view-filter-grid')) {
                $('.products-list').addClass('active');
            } else if($(this).hasClass('view-filter-map')) {
                $('.products-map').addClass('active');
            } else if($(this).hasClass('view-filter-lines')) {
                $('.products-table').addClass('active');
            }
        }
    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.header-bottom .categories').stop().slideToggle(200);
    });

    $('nav .mobile-links').click(function() {
        $(this).toggleClass('active');
        $('nav ul').stop().slideToggle(200);
    });

    $('.add-object').click(function() {
        $('.window-add-object').fadeIn();
    });

    $('.make-application').click(function() {
        $('.window-make-application').fadeIn();
    });

    $('.write-message').click(function() {
        $('.window-object-message').fadeIn();
    });

    $('.to-booking').click(function() {
        $('.window-booking').fadeIn();
    });
    
    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-window')) $('.window').fadeOut();
    });
    
    $('.product-card button').click(function() {
        $(this).addClass('added').html('В списке сравнения');
    });

    $('.tab-control').click(function() {

        if(!$(this).hasClass('active')) {

            $(this).siblings('.active').removeClass('active');
            $(this).parent().siblings('.tab.active').removeClass('active');

            $(this).addClass('active');
            var index = $(this).index();
            $(this).parent().siblings('.tab').eq(index).addClass('active');

            if ($(this).parent().hasClass('object-tabs-controls') && $(this).index() == 3) {

                var currentSlide = $('.slider-calendar').slick('slickCurrentSlide');
                $('.slider-calendar').slick('slickGoTo', currentSlide, true);

                setTimeout(function() {
                    $('.slider-calendar').animate({'opacity' : 1}, 400);
                }, 500);
            }

        }

    });

    $('input[name="checkbox-rate"]').change(function() {
        var array = $(this).attr('id').split('-');
        var index = parseInt(array[array.length - 1]);
        for (var i = 1; i < 6; i++) {
            document.getElementById('checkbox-rate-' + i).checked = i <= index;
        }
    });
    /******************************************************************************************************************
     ******* slider scripts
     ******************************************************************************************************************/

    $('.banner .slider').slick({
        appendArrows: '.banner-control',
        prevArrow: '.banner-control-left',
        nextArrow: '.banner-control-right',
        dots: true
    });

    $('.object-slider').slick({
        asNavFor: '.object-slider-dots',
        speed: 600
    });

    $('.object-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.photos-controls .current-photo').html(nextSlide  + 1);
    });


    $('.object-slider-dots').slick({
        slidesToShow: 6,
        appendArrows: '.photos-control',
        prevArrow: '.photos-control-left',
        speed: 600,
        nextArrow: '.photos-control-right',
        asNavFor: '.object-slider',
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1081,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.slider-calendar').slick({
        slidesToShow: 3,
        initialSlide: 11,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /******************************************************************************************************************
     ******* scrollbar scripts
     ******************************************************************************************************************/

    $('.object-tabs-additional-reviews .contentbar').mCustomScrollbar();

});




$('.button-choose').click(function() {
    $('.window-choose-city').fadeIn();
});

$('.logo').click(function() {
    $('.window-thanks').fadeIn();
});


