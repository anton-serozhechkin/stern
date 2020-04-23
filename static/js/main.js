let workPlace = document.getElementById('workPlace');
let wrapper = document.getElementById('wrapper');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let flag = true;

function canvasSettings() {
    canvas.setAttribute('height',innerHeight)
    canvas.setAttribute('width',innerWidth)
}
function moreFigures() {
    let figuresList = document.getElementById('tools-list-moreFiguresId');
    let figuresMoreCaret = document.getElementById('tools-list-square-caret');
    figuresMoreCaret.addEventListener('click',function () {

        figuresList.classList.remove('tools-list-moreFigures-none')
        figuresList.classList.add('tools-list-moreFigures-block')

        figuresMoreCaret.addEventListener('click',function () {
            figuresList.classList.remove('tools-list-moreFigures-block')
            figuresList.classList.add('tools-list-moreFigures-none')
            moreFigures();
        })})
}

function toolsMenuHide() {
    let showButton = document.getElementById('tools-menu-showButton');
    let toolsMenu = document.getElementById('toolsMenu');
    let toolsMenuI = document.getElementById('tools-menu-showButtonI');

    showButton.addEventListener('click',function () {
        toolsMenu.style.left = '0';
        toolsMenuI.classList.add('icon-reverse');
        showButton.addEventListener('click',function () {
            let toolsListMore = document.getElementById('tools-list-moreFiguresId');
            if(toolsListMore.classList.contains('tools-list-moreFigures-block')) {
                toolsListMore.classList.remove('tools-list-moreFigures-block');
                toolsListMore.classList.add('tools-list-moreFigures-none');
            }
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
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let square = document.createElement('img');
                square.setAttribute('draggable','true')
                square.setAttribute('src','../../square.svg')
                square.classList.add('figure');
                square.classList.add('figure-square');
                square.style.left = (x - 100)+ 'px';
                square.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(square);
            }
        },
        5: function () {

        },
        6: function () {

        },
        7: function () {

        },
        8: function () {
            alert('aaa')

        },
        9: function () {

        },
        10: function fullScreen () {
            document.documentElement.requestFullscreen();
                let fullScreenButton = document.getElementById('fullScreenButton');
                fullScreenButton.addEventListener('click', function () {
                    document.exitFullscreen();
                })

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
        32: function drag() {
            flag = false;
            let figuresArray = document.getElementsByClassName('figure')
            for (let i = 0; i < figuresArray.length; i++) {
                figuresArray[i].addEventListener('dragend',function (event) {
                    let itemH = figuresArray[i].clientHeight;
                    let itemW = figuresArray[i].clientWidth;
                    figuresArray[i].style.top = (event.pageY - itemH/2) + 'px';
                    figuresArray[i].style.left = (event.pageX - itemW/2 )+ 'px';
                })
            }

        },
        33: function changeSize() {
                flag = false;
                let figuresArray = document.getElementsByClassName('figure')
                console.log(figuresArray)
                for (let i = 0; i < figuresArray.length; i++) {
                    figuresArray[i].addEventListener('click',function () {
                        figuresArray[i].style.border = 'solid 1px black';
                        alert(figuresArray[i].clientWidth);
                        let objectHeight = figuresArray[i]
                    })
                }
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
moreFigures();