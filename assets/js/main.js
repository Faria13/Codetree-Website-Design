jQuery(document).ready(function () {
    $('#videolink').magnificPopup({
        type: 'inline',
        midClick: true
    })
    $('.portfolio-area').owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.pricing-plan').owlCarousel({
        smartSpeed: 700,
        loop: true,
        margin: 10,
        autoplayHoverPause: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    $('#testimonial-area').owlCarousel({
        items: 1,
        smartSpeed: 700,
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.team-area').owlCarousel({
        smartSpeed: 700,
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('white');
    } else {
        $('nav').removeClass('white');
    }
})
$(function () {
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

});
// Scroll Top Button

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
});

//Preloader

$(document).ready(function () {
    setTimeout(function () {
        $('.loader-bg').fadeToggle();
    }, 8000);

});