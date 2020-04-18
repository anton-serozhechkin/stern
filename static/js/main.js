function toolsMenuHide() {
    let showButton = document.getElementById('tools-menu-showButton');
    let toolsMenu = document.getElementById('toolsMenu');
    let toolsMenuI = document.getElementById('tools-menu-showButtonI');

    showButton.addEventListener('click',function () {
        toolsMenu.style.left = '0';
        toolsMenuI.classList.add('icon-reverse');
        showButton.addEventListener('click',function () {
            toolsMenu.style.left = '-65px';
            toolsMenuI.classList.remove('icon-reverse');
            toolsMenuHide();
        })
    })
}
function mediaVideoHide() {
    let showButton = document.getElementById('media-video-showButton');
    let videoMenu = document.getElementById('mediaVideo');
    showButton.addEventListener('click',function () {
        videoMenu.style.right = '0';
        showButton.addEventListener('click',function () {
            videoMenu.style.right = '-350px';
            mediaVideoHide();
        })
    })

}



toolsMenuHide();
mediaVideoHide();

