// navbar background color change on scroll
$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
        $(".navbar.navbar-custom").css("background", "transparent");
        $(".navbar.navbar-custom").css("borderBottom", "none");
    } else {
        $(".navbar.navbar-custom").css("background", "#222029");
        // $(".navbar.navbar-custom").css("opacity", "0.9");
        $(".navbar.navbar-custom").css("borderBottom", "1px solid white");
    }
});
// navbar background color change on scroll

// section owlBanner
$(".owl-carousel.owlCarouselBanner").owlCarousel({
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    autoplay: true,
    loop: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ]
});
// section owlBanner

// section owlPortfolio
$(".owl-carousel.owlCarouselPortfolio").owlCarousel({
    loop: true,
    dots: false,
    margin: 30,
    nav: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});
// end section owlPortfolio

// aos section animation
AOS.init({
    delay: 50,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease" // default easing for AOS animations
});
// end aos section animation

// scroll Smooth vanillajs-scrollspy.min.js
const navbar = document.querySelector(".navbarNav");
const scrollspy = new VanillaScrollspy(navbar);
scrollspy.init();
// end scroll Smooth vanillajs-scrollspy.min.js

// img background hover
$("#boxItem").mouseover(function() {
    $('#skillsIcon').addClass('active');
});
$("#boxItem").mouseout(function() {
    $('#skillsIcon').removeClass('active');
});
// end img background hover