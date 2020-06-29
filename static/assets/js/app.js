function indexNav() {
    $('.nav-list-box').click(function () {
            $(this).toggleClass('active').find('.nav-link').toggleClass('active');
        }
    );
    $('.fa-bars').click(function () {
            $('.nav-link').toggleClass('active')
    })
}

function reviewsSlider() {
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.reviews-slider-left'),
        nextArrow: $('.reviews-slider-right'),
    });
}
reviewsSlider();
indexNav();