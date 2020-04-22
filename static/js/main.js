let workPlace = document.getElementById('workPlace');
let wrapper = document.getElementById('wrapper');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function canvasSettings() {
    canvas.setAttribute('height',innerHeight)
    canvas.setAttribute('width',innerWidth)
}


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

function chooseTool() {
    let funcArray = {
        0: function brush() {

            canvas.onmousedown  = function (event) {
                canvas.onmousemove = function (event) {
                    let x1 = event.offsetX;
                    let y1 = event.offsetY;
                    ctx.beginPath();
                    ctx.moveTo(x1 - 5,y1 + 10 );

                    canvas.onmousemove = function (event) {
                        let x2 = event.offsetX;
                        let y2 = event.offsetY;
                        ctx.lineTo(x2,y2 + 10);
                        ctx.stroke();
                    }
                };
                canvas.onmouseup = function () {
                    canvas.onmousemove = null;
                }
            }

        },
        1: function () {
            canvas.onmousedown = function (event) {
                let x = event.offsetX;
                let y = event.offsetY;
                alert(screen.height)
                alert(x)
                alert(y)
            }
        },
        2: function eraser () {

        }
    }


    let toolsArray = document.getElementsByClassName('tool');
    console.log(toolsArray);
    for (let i = 0; i < toolsArray.length; i++) {
        toolsArray[i].addEventListener('click',function () {
            funcArray[i]();
        });
    }
}


toolsMenuHide();
mediaVideoHide();
mediaMicrophoneHide();
mediaChatHide();
chooseTool();
canvasSettings();
