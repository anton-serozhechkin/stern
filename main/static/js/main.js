const turnArrow = document.getElementsByClassName('turnOn-arrow');
const navShow = document.getElementById('nav-show');
let itemsArray = document.getElementsByClassName('nav');
let showFlag = false;
setTimeout(() => {
    turnArrow[0].remove();
}, 2000 * 10);
function hideNav() {
    for (let i = 0; i<itemsArray.length; i ++) {
        itemsArray[i].style.right = -(itemsArray[i].clientWidth - 5) +'px';
    }
}
hideNav();
function hoverNav() {
    for (let i = 0; i < itemsArray.length;i++) {
        itemsArray[i].addEventListener('mousemove',()=>{
            itemsArray[i].style.right = 0;
            this.addEventListener('mouseout',()=>{
                itemsArray[i].style.right = -(itemsArray[i].clientWidth - 5) +'px';
            })
        })
    }
}
hoverNav();
