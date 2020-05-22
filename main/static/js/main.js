function showMap() {
    let overlay = document.getElementById('contact-modal-overlay');
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
showMap();