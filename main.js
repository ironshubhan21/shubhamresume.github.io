var $window = $(window);
var $root = $('html, body');

$(document).ready(function() {

    "use strict";
    colorScheme();
    ColorPallet();
    PillMenuToggler();
    menuToggler();
    sliderOwlCarousel();
    typedJS();
    skills();
    countUp();
    portfolioPopup();
    clientCarousel();
    BlogCarousel();

});

$window.on("load", (function() {
    $("#overlayer").delay(500).fadeOut('slow');
    $(".loader").delay(1000).fadeOut('slow');
    portfolioIsotop();
}));

function colorScheme() {
    var $darkLogo = $('.dark-logo');
    $('.color-scheme').click(function() {
        $("body").toggleClass('portv-dark');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    });
}

var list = document.getElementsByClassName('data-background');

for (var i = 0; i < list.length; i++) {
    var color = list[i].getAttribute('data-color');
    list[i].style.backgroundColor = "" + color + "";
}





var allDivs = document.getElementsByClassName('data-text-color');

for (var i = 0; i < allDivs.length; ++i) {
    var color = allDivs[i].getAttribute('data-color');
    allDivs[i].style.color = "" + color + "";
}


var allDivs = document.getElementsByClassName('timeline-border');

for (var i = 0; i < allDivs.length; ++i) {
    var color = allDivs[i].getAttribute('data-color');
    allDivs[i].style.borderLeftColor = "" + color + "";
}


$("#menu > li a").on("click", function() {
    $("#main > section.active, #menu > li a").removeClass("active");
    $(this).addClass('active');
    var $id = $(this).attr('href');
    $('#main').children($id).addClass('active');
});


function ColorPallet() {

    "use strict";

    $("ul.pattern .color1").click(function() {
        return $("#option-color").attr("href", "assets/css/color/default.css")
    });
    $("ul.pattern .color2").click(function() {
        return $("#option-color").attr("href", "assets/css/color/orange-color.css")
    });
    $("ul.pattern .color3").click(function() {
        return $("#option-color").attr("href", "assets/css/color/blue-color.css")
    });
    $("ul.pattern .color4").click(function() {
        return $("#option-color").attr("href", "assets/css/color/green-color.css")
    });
    $("ul.pattern .color5").click(function() {
        return $("#option-color").attr("href", "assets/css/color/yellow-color.css")
    });
    $("ul.pattern .color6").click(function() {
        return $("#option-color").attr("href", "assets/css/color/pink-color.css")
    });
    $("#color-switcher .pallet-button").click(function() {
        $("#color-switcher .color-pallet").toggleClass('show')
    })

}

function PillMenuToggler() {

    "use strict";
    $(".overlay-menu-toggler").click(function() {
        $(".overlay-menu").addClass("show");
    });
    $(".overlay-menu").click(function() {
        $(this).removeClass("show");
    });
}

function menuToggler() {
    "use strict";
    var $menuToggler = $(".menu-toggler");
    var $header = $('header');
    $menuToggler.click(function() {
        $(this).toggleClass('open').find('i').toggleClass('lni-menu lni-close ');
        $header.toggleClass('open');
        $('.color-scheme, .pallet-button, .color-pallet').toggleClass('hide');
    });
    if ($window.width() < 1200) {
        $('header li a').click(function() {
            $header.removeClass('open');
            $('.color-scheme, .pallet-button, .color-pallet').toggleClass('hide');
            $menuToggler.removeClass('open').find('i').removeClass('lni-close').addClass('lni-menu');
        })
    }
}

function sliderOwlCarousel() {
    $('.home-03 .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
    });
    $('#home-slider').on("translate.owl.carousel", function() {
        setTimeout(function() {
            $('.home-slide').removeClass("zoom");
        }, 1000)
    });
    $('#home-slider').on("translated.owl.carousel", function() {
        $('.owl-item.active .home-slide').addClass("zoom");
    });
}

function typedJS() {

    "use strict";

    var options = {
        strings: $(".element").attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000,
        backSpeed: 50,
        loop: true
    };
    var typed = new Typed(".element", options);
}

function skills() {

    "use strict";
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}


function countUp() {

    "use strict";

    $('.timer').countTo();
    $('.count-number').removeClass('timer');

}

function portfolioPopup() {

    "use strict";

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }
}

function portfolioIsotop() {

    "use strict";

    var $container = $('.portfolio-items');
    var $filter = $('#portfolio-filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').on("click", function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
                touchSensitivity: 2,
            }
        });
        return false;
    });
}

function clientCarousel() {
    $(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 5,
        nav: false,
        autoplay: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 700,
        autoplayHoverPause: false,
        responsiveClass: true,
        rtl: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            992: {
                items: 3,
                nav: false,
            },

        }
    });
}

function BlogCarousel() {

    "use strict";

    $(".blog .owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        autoplay: false,
        loop: true,
        dots: true,
        margin: 30,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,

    });
}




/* ----------------------------------------------contact java script--------------------------------*/


