function reviews() {
    jQuery('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.fa-caret-left'),
        nextArrow: $('.fa-caret-right'),
    });
}
function signForm() {
    let signIn_form = document.getElementById('signIn-form'),
        signUp_form = document.getElementById('signUp-form'),
        signIn_btn = document.getElementById('signIn'),
        signUp_btn = document.getElementById('signUp')
    signUp_btn.addEventListener('click',function () {
        signUp_form.classList.remove('d-none')
        signIn_form.classList.add('d-none')
    })
    signIn_btn.addEventListener('click',function () {
        signIn_form.classList.remove('d-none')
        signUp_form.classList.add('d-none')
    })
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
function teachersSlider() {
    let elementsArray = document.getElementsByClassName('table-elem'),
        toggleArray = document.getElementsByClassName('slider-toggle'),
    buttons = document.querySelector('.buttons');
    if (elementsArray) {
        let contentTitle = document.getElementById('contentTitle'),
        contentSubtitle = document.getElementById('contentSubtitle'),
            text__1 = document.getElementById('text__1'),
            text__2 = document.getElementById('text__2'),
            elemImages = document.getElementsByClassName('elemImage'),
            contentImage = document.getElementById('contentImage')
        for (let i = 0;i< elementsArray.length;i++) {
            let element = document.createElement('input')
            element.className = 'slider-toggle';
            element.setAttribute('type','button');
            buttons.appendChild(element)
        }
        toggleArray[0].classList.add('active')
        buttons.addEventListener('click',function (e) {
            const target = e.target
            Array.from(toggleArray).forEach(item => {
                item.classList.remove('active')
            })
            target.classList.add('active')
        })
        for(let i = 0; i < elementsArray.length;i++) {
            elementsArray[i].addEventListener('click',function (e) {
                let child = elementsArray[i].childNodes,
                    title = child[3].textContent,
                    subtitle = child[5].textContent,
                    content_1 = child[7].textContent,
                    content_2 = child[9].textContent;


                    text__1.textContent = content_1;
                    text__2.textContent  = content_2;
                contentTitle.textContent = title;
                contentSubtitle.textContent = subtitle;
                let elemImage = elemImages[i].getAttribute('src');
              contentImage.setAttribute('src',elemImage)

            })
        }
        console.log(elemImages)
        for(let i = 0;i < toggleArray.length;i++) {
            toggleArray[i].addEventListener('click',function () {
                let child = elementsArray[i].childNodes,
                    title = child[3].textContent,
                    subtitle = child[5].textContent,
                    content_1 = child[7].textContent,
                    content_2 = child[9].textContent;


                text__1.textContent = content_1;
                text__2.textContent  = content_2;
                contentTitle.textContent = title;
                contentSubtitle.textContent = subtitle;
                let elemImage = elemImages[i].getAttribute('src');
                contentImage.setAttribute('src',elemImage)

            })
        }
    }
}
function navMenu() {
    let linksArray = document.querySelectorAll('.nav-title');
    if (linksArray) {
        let squareArray = document.querySelectorAll('.nav-title-square')
        for (let i = 0; i < squareArray.length;i++) {
            squareArray[i].addEventListener('mousemove',()=> {
                linksArray[i].classList.add('nav-title-active');
                squareArray[i].addEventListener('click',()=> {
                    linksArray[i].classList.remove('nav-title-active');
                })
            })
        }
        let navToggle = document.getElementById('nav-toggle');
        navToggle.addEventListener('click',()=> {
            for (let i = 0; i < linksArray.length;i++) {
                if (linksArray[i].classList.contains('nav-title-active')) {
                    for (let j = 0; j < linksArray.length;j++) {
                        linksArray[j].classList.remove('nav-title-active')
                    }
                } else {
                    for (let j = 0; j < linksArray.length;j++) {
                        linksArray[j].classList.add('nav-title-active')
                    }
                }
            }

        })
    }
}
function schedule() {
    let bSelector = document.getElementById('schedule-selector-baum'),
        mSelector = document.getElementById('schedule-selector-mosf');
    bSelector.addEventListener('click',function () {
        bSelector.style.backgroundColor = '#4A8C92'
        bSelector.style.color = 'white'
        mSelector.style.color = '#4A8C92'
        mSelector.style.backgroundColor = 'unset'
    })

    mSelector.addEventListener('click',function () {
        mSelector.style.backgroundColor = '#4A8C92'
        mSelector.style.color = 'white'
        bSelector.style.color = '#4A8C92'
        bSelector.style.backgroundColor = 'unset'
    })
}
schedule();
reviews();
signForm();
navMenu();
showMap();
teachersSlider();
