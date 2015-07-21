/**
 * Created by madki on 11/07/15.
 */

$(window).load(function () {
    //$('.flexslider').flexslider({
    //    animation: "slide",
    //    controlNav: true,
    //    start: function (slider) {
    //        $('.progress-bar').animate({'width': "100%"}, 7000-600, function(){
    //            $(this).css({'width' : 0})
    //        });
    //    },
    //    after: function (slider) {
    //        $('.progress-bar').animate({'width': "100%"}, 7000-600, function(){
    //            $(this).css({'width' : 0})
    //        });
    //    }
    //});

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        pauseOnHover: false,
        pauseOnAction: false,
        start: function (slider) {
            changeTimer(slider);
        },
        after: function (slider) {
            changeTimer(slider);
        },
        slideshowSpeed: 5000,
        animationSpeed: 300

    });

    function changeTimer(slider) {
        $('.slide-timer').removeClass('working');
        $('.slide-timer[data-slide="' + slider.currentSlide + '"]').addClass('working');
    }

    $('.slide-timer').on('click', function () {
        var slider = $('.flexslider');
        slider.flexslider(parseInt($(this).attr('data-slide')));
        slider.flexslider("play");
    });


    $('.product-filter-container .product-filter').click(function () {
        var subFilterName = $(this).data("custom");
        var subFilterContainer = $('.product-sub-filter-container');
        var subFilter = subFilterContainer.find("." + subFilterName);
        console.log(subFilter);

        if(subFilter.hasClass('expanded')) {
            subFilter.removeClass('expanded');
            subFilterContainer.addClass('hidden');
            $(this).removeClass('chosen');
        } else {
            $('.product-sub-filter-container .sub-filter').removeClass('expanded');
            $('.product-filter-container .product-filter').removeClass('chosen');
            $(this).addClass('chosen');
            subFilter.addClass('expanded');
            subFilterContainer.removeClass('hidden');
        }
    });

    $('#home').click(function () {
        modifySelcted($('#home'));
        $('html, body').animate({
            scrollTop: $(".page-one").offset().top
        }, 400);
    });

    $('#menu-shop').click(function () {
        modifySelcted($('#menu-shop'));
        $('html, body').animate({
            scrollTop: $(".page-three").offset().top
        }, 400);
    });

    $('#menu-how-it-works').click(function () {
        modifySelcted($('#menu-how-it-works'));
        $('html, body').animate({
            scrollTop: $(".page-two").offset().top
        }, 400);
    });

    function modifySelcted($selector) {
        var currentSelected = $('.selected');
        currentSelected.removeClass('selected');
        $selector.addClass('selected');
    }

    $('#category').click(function () {
        $('.page-one-sub-options').toggleClass('hidden');
    });

    $('.option-container:not(#category)').click(function () {
        var subOptions = $('.page-one-sub-options');
        if (!subOptions.hasClass('hidden')) {
            subOptions.addClass('hidden');
        }
    });

    $('#dp').datepicker({
        // nextText: '&rarr;',
        // prevText: '&larr;',
        showOtherMonths: true,
        //dateFormat: 'dd MM yy',
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        showOn: "both",
        buttonText: "<span class='fa fa-calendar white-text option-icon calendar-icon'></span>",
    });
});
