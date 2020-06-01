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


showMap();
teachersSlider();