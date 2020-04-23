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

        },
        2: function eraser () {
            canvas.onmousedown = function (event) {
                canvas.onmousemove = function (event) {
                    let x = event.offsetX;
                    let y = event.offsetY;
                    ctx.clearRect(x,y+15,5,5);
                };
                canvas.onmouseup = function () {
                    canvas.onmousemove = null;
                }
            }
        },
        3: function text() {

        },
        4: function square() {
            canvas.onmousedown = function (event) {
                let x = event.offsetX;
                let y = event.offsetY;
                let square = document.createElement('img');
                square.setAttribute('src','../../square.svg')
                square.classList.add('figure');
                square.classList.add('figure-square');
                square.style.left = (x - 100)+ 'px';
                square.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(square);
            }
        },
        6: function () {

        },
        7: function () {

        },
        8: function () {

        },
        9: function fullScreen () {
            document.documentElement.requestFullscreen();
                let fullScreenButton = document.getElementById('fullScreenButton');
                fullScreenButton.addEventListener('click', function () {
                    document.exitFullscreen();
                })

        },
        10: function () {

        },
        11: function () {
        },
        12: function () {

        },
        13: function () {

        },
        14: function () {

        },
        15: function () {

        },
        16: function () {

        },
        17: function () {

        },
        18: function () {

        },
        19: function () {
        },
        20: function () {

        },
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
