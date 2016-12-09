$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.banner').animate({opacity: 1}, 500);
    }, 500);

    $(document).click(function(event) {
        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
            $('.custom-select').find('ul').stop().slideUp(200);
        }
    });

    setTimeout(function() {
        $('.slider').animate({opacity: 1});
    }, 500);

    if ($(window).width() < '1231'){
        
    } else {
        
    }

    $(window).resize(function(){
        if ($(window).width() < '1231'){
            
        } else {
            
        }
    });

    /******************************************************************************************************************
     ******* custom select scripts
     ******************************************************************************************************************/

    $('.custom-select').hover (
        function() {
            if ($(window).width() > '1279' && !$(this).hasClass('custom-select-form')){
                $(this).addClass('active');
                $(this).find('ul').stop().fadeIn(0);
            }
        },
        function() {
            if ($(window).width() > '1279' && !$(this).hasClass('custom-select-form')){
                $(this).removeClass('active');
                $(this).find('ul').stop().fadeOut(0);
            }
        }
    );    

    $('.custom-select .current-value').click(function() {
        if ($(window).width() < '1280' || $(this).parent().hasClass('custom-select-form')){
            if(!$(this).parent().hasClass('active')) {
                $('.custom-select').removeClass('active');
                $(this).parent().addClass('active');
                $('.custom-select').find('ul').stop().fadeOut(0);
                $(this).siblings('ul').stop().fadeIn(0);
            } else {
                $('.custom-select').removeClass('active');
                $('.custom-select').find('ul').stop().fadeOut(0);
            }
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
    
    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-window')) $('.window').fadeOut();
    });
    
    $('.product-card button').click(function() {
        $(this).addClass('added').html('В списке сравнения');
    });

    $('.object-tabs-additional-controls li').click(function() {

        if(!$(this).hasClass('active')) {

            $('.object-tabs-additional-controls li.active').removeClass('active');
            $('.tabs-additional.active').removeClass('active');

            $(this).addClass('active');
            var index = $(this).index();
            $('.tabs-additional').eq(index).addClass('active')

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

});


