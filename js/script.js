$( document ).ready(function() {
    // Carousel
    $('.hero_carousel').slick({
        infinite: true,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        nextArrow: '<svg class="nb_i slick_next"><use xlink:href="/svg/sprite.svg#arrow_right"></use></svg>',
        prevArrow: '<svg class="nb_i slick_prev"><use xlink:href="/svg/sprite.svg#arrow_right"></use></svg>'
    });

    // Back-to-top button
    $(window).scroll(function(){
        var showAfter = 200;
        if ( $(this).scrollTop() > showAfter ) { 
            $('.back_to_top').addClass('visible_btt');
        } else { 
            $('.back_to_top').removeClass('visible_btt');
        }
    });
       
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop : 0},400);
        return false;
    });

    // Shrink nav on scroll
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        
        if (scrollTop >= 100) {
            $('.header').addClass('scrolled_nav');
        } else if (scrollTop < 100) {
            $('.header').removeClass('scrolled_nav');
        } 
    });

    // Mobile nav toggle
    $('.hamburger').click(function(){
        $('.nav').toggleClass('open_nav');
    });
});