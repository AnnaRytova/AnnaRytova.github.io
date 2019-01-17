
$(document).ready(function () {



    $(".banner").owlCarousel({
        margin: 30,
        items: 1,
        dotsContainer: ".customDots",
        dots: true,
        merge: true,
        nav: false,
        loop: true,
        lazyLoad: true,
        center: true,
        autoplay: true,
        autoplaySpeed: 600,
        autoplayTimeout: 6000

    });

    $(".shopSlider").owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        navText: ["<",">"],
        loop: true,
        autoplay: true,
        autoplaySpeed: 250,
        autoplayHoverPause: true
    });


})