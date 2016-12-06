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

    $('.custom-select').hover(
        function() {
            if ($(window).width() > '1279'){
                $(this).addClass('active');
                $(this).find('ul').stop().slideDown(200);
            }
        },
        function() {
            if ($(window).width() > '1279'){
                $(this).removeClass('active');
                $(this).find('ul').stop().slideUp(200);
            }
        }
    );    

    $('.custom-select .current-value').click(function() {
        if ($(window).width() < '1280'){
            $('.custom-select').removeClass('active');
            $('.custom-select').find('ul').stop().slideUp(200);
            $(this).parent().toggleClass('active');
            $(this).siblings('ul').stop().slideToggle(200);
        }   
    });

    $('.custom-select ul li').click(function() {
       
        if (!$(this).hasClass('chosen')) {
            $('.custom-select ul li.chosen').removeClass('chosen');
            $(this).addClass('chosen');

            var currentChoice = $(this).html();
            $(this).parents('.custom-select').find('.current-value').html(currentChoice);

            $(this).parents('.custom-select').find('input').attr('value', currentChoice);

            $(this).parents('.custom-select').removeClass('active');
            $(this).parents('.custom-select').find('ul').stop().slideUp(200);
        }
        
    });

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.more-filters').click(function() {
        $(this).parents('form').toggleClass('active');
    });
    
    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-window')) $('.window').fadeOut();
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

    /******************************************************************************************************************
     ******* filter-slider scripts
     ******************************************************************************************************************/

    var defaultMin = 150, defaultMax = 700;

    $('.filter-slider').rangeSlider({
        bounds:{min: 0, max: 1500},
        defaultValues:{min: defaultMin , max: defaultMax},
        step: 10
    });

    $('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-inner').html(defaultMin);
    $('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-inner').html(defaultMax);

    $(".filter-slider").bind("valuesChanging", function(e, data){
        $('.ui-rangeSlider-leftLabel .ui-rangeSlider-label-inner').html(data.values.min);
        $('.ui-rangeSlider-rightLabel .ui-rangeSlider-label-inner').html(data.values.max);
    });


