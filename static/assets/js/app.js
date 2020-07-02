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
function showMap() {
    let overlay = document.getElementById('contact-modal-overlay');
    if(overlay) {
        let buttonsArray = [document.getElementById('map-1'),document.getElementById('map-2')];
        let modalArray = [document.getElementById('maps-modal-1'),document.getElementById('maps-modal-2')]
        let crossArray = [document.getElementById('contacts-modal-cross1'),document.getElementById('contacts-modal-cross2')]
        buttonsArray[0].addEventListener('click',function () {
            modalArray[0].classList.add('active');
            overlay.classList.add('active');
            overlay.addEventListener('click',function () {
                overlay.classList.remove('active');
                modalArray[0].classList.remove('active');
            })
            crossArray[0].addEventListener('click',function () {
                overlay.classList.remove('active');
                modalArray[0].classList.remove('active');
            })
        })
        buttonsArray[1].addEventListener('click',function () {
            modalArray[1].classList.add('active');
            overlay.classList.add('active');
            overlay.addEventListener('click',function () {
                overlay.classList.remove('active');
                modalArray[1].classList.remove('active')
            })
            crossArray[1].addEventListener('click',function () {
                overlay.classList.remove('active');
                modalArray[1].classList.remove('active');
            })
        })
    }
}
function slideSign() {
    $('#signUp-btn').click(function () {
        $('#signUp').removeClass('form-disable')
        $('#signUp').addClass('form-active')
        $('#signIn').removeClass('form-active');
        $('#signIn').addClass('form-disable');
    })
    $('#signIn-btn').click(function () {
        $('#signUp').removeClass('form-active')
        $('#signUp').addClass('form-disable')
        $('#signIn').removeClass('form-disable');
        $('#signIn').addClass('form-active');
    })
}
reviewsSlider();
indexNav();
showMap();
slideSign();
