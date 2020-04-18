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

function mediaMicrophoneHide() {
    let showButton = document.getElementById('media-microphone-showButton');
    let microphoneMenu = document.getElementById('mediaMicrophone');
    showButton.addEventListener('click',function () {
        microphoneMenu.style.right = '-165px';
        showButton.addEventListener('click',function () {
            microphoneMenu.style.right = '-380px';
            mediaMicrophoneHide();
        })
    })

}
function mediaChatHide() {
    let showButton = document.getElementById('media-chat-showButton');
    let chatMenu = document.getElementById('mediaChat');
    showButton.addEventListener('click',function () {
        chatMenu.style.right = '0';
        showButton.addEventListener('click',function () {
            chatMenu.style.right = '-365px';
            mediaChatHide();
        })
    })

}
function canvasSettings() {
    let canvas = document.getElementById('canvas')
    let screenSizeW = screen.width;
    let screenSizeH = screen.height;
    canvas.setAttribute('width',screenSizeW);
    canvas.setAttribute('height',screenSizeH);
}


toolsMenuHide();
mediaVideoHide();
mediaMicrophoneHide();
mediaChatHide();
canvasSettings();