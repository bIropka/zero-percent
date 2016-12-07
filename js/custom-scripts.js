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
    
    /******************************************************************************************************************
     ******* filter-cost scripts
     ******************************************************************************************************************/

    var filterCost = $("#filter-cost");

    $("#filter-cost").rangeSlider({
        bounds:{min: 0, max: 5000},
        defaultValues:{min: 500 , max: 2700},
        step: 50
    });

    $("#filter-cost").bind("valuesChanging", function(e, data){
        $( "#min-cost" ).val( data.values.min );
        $( "#max-cost" ).val( data.values.max );
    });

    $( "#min-cost" ).val( $("#filter-cost").rangeSlider('min') );
    $( "#max-cost" ).val( $("#filter-cost").rangeSlider('max') );

    /******************************************************************************************************************
     ******* slider scripts
     ******************************************************************************************************************/

    $('.banner .slider').slick({
        appendArrows: '.banner-control',
        prevArrow: '.banner-control-left',
        nextArrow: '.banner-control-right',
        dots: true

    });

    /******************************************************************************************************************
     ******* filter-slider scripts
     ******************************************************************************************************************/

    var defaultMin = 150, defaultMax = 700;

    $('.filter-slider').rangeSlider({
        bounds:{min: 0, max: 1500},
        defaultValues:{min: defaultMin , max: defaultMax},
        step: 10
    });

    $('<form action="#"><input type="text" /></form>').appendTo('.ui-rangeSlider-label-inner');
    $('.ui-rangeSlider-label-inner input').css({
        'display' : 'block',
        'width': '100%',
        'height': '100%',
        'background': '#ffffff',
        'color': '#000000',
        'font-size': '0.8571428571428571em',
        'font-family': '"PTSansBold", sans-serif',
        'text-align': 'center',
        'padding-top': '1px',
        'border': 'none'
    });

    $('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-inner input').attr('value', defaultMin);
    $('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-inner input').attr('value', defaultMax);

    $(".filter-slider").bind("valuesChanging", function(e, data){
        var values = $(".filter-slider").rangeSlider("values");
        $('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-inner input').val(values.min);
        $('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-inner input').val(values.max);
    });

    $('.ui-rangeSlider-label-value').click(function() {
        $(this).toggleClass('active');
    });

    $('.ui-rangeSlider-label-inner form').submit(function(event) {
        var min = $('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-inner input').val();
        var max = $('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-inner input').val();
        $(".filter-slider").rangeSlider("values", min, max);

        event.preventDefault();
    });

});


