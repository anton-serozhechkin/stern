function indexNav() {
    $('.nav-list-box').click(function () {
            $(this).toggleClass('active').find('.nav-link').toggleClass('active');
        }
    );
    $('.fa-bars').click(function () {
            $('.nav-link').toggleClass('active')
    })
}
indexNav();