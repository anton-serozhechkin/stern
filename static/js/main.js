let workPlace = document.getElementById('workPlace');
let wrapper = document.getElementById('wrapper');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let flag = true;
let textFlag = false;
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
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == true) {
                    let x = event.offsetX;
                    let y = event.offsetY;
                    let textBox = document.createElement('textarea');
                    textBox.classList.add('textBox');
                    wrapper.appendChild(textBox);
                    textBox.style.top = y + 'px';
                    textBox.style.left = x + 'px';
                    textBox.style.zIndex = '200';

                    textBox.addEventListener('keydown',function (event) {
                        if (event.code == 'Enter') {
                            let textBoxContent = textBox.value;
                            let textBoxPar = document.createElement('div');
                            textBoxPar.textContent = textBoxContent;
                            textBoxPar.classList.add('text')
                            textBoxPar.setAttribute('draggable','true');
                            textBoxPar.style.position = 'absolute';
                            textBoxPar.style.zIndex = '201';
                            textBoxPar.style.left = x + 'px';
                            textBoxPar.style.top = y + 'px';
                            wrapper.appendChild(textBoxPar);
                            textBox.remove();

                        }
                    })


                    flag = false;
                }
            }
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
                square.setAttribute('src','../static/img/square.svg')
                square.classList.add('figure');
                square.classList.add('figure-square');
                square.style.left = (x - 100)+ 'px';
                square.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(square);
            }
        },
        5: function rectangle () {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let rectangle = document.createElement('img');
                rectangle.setAttribute('draggable','true')
                rectangle.setAttribute('src','../static/img/rectangle.svg')
                rectangle.classList.add('figure');
                rectangle.classList.add('figure-rectangle');
                rectangle.style.left = (x - 100)+ 'px';
                rectangle.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(rectangle);
            }
          },
        6: function cube() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let cube = document.createElement('img');
                cube.setAttribute('draggable','true')
                cube.setAttribute('src','../static/img/cube.svg')
                cube.classList.add('figure');
                cube.classList.add('figure-cube');
                cube.style.left = (x - 100)+ 'px';
                cube.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(cube);
            }
        },
        7: function circle() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let circle = document.createElement('img');
                circle.setAttribute('draggable','true')
                circle.setAttribute('src','../static/img/circle.svg')
                circle.classList.add('figure');
                circle.classList.add('figure-circle');
                circle.style.left = (x - 100)+ 'px';
                circle.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(circle);
            }
        },
        8: function rhubmus() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let rhombus = document.createElement('img');
                rhombus.setAttribute('draggable','true')
                rhombus.setAttribute('src','../static/img/rhombus.svg')
                rhombus.classList.add('figure');
                rhombus.classList.add('figure-rhombus');
                rhombus.style.left = (x - 100)+ 'px';
                rhombus.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(rhombus);
            }

        },
        9: function prism6Angels() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let prism = document.createElement('img');
                prism.setAttribute('draggable','true')
                prism.setAttribute('src','../static/img/prism6angels.svg')
                prism.classList.add('figure');
                prism.classList.add('figure-prism');
                prism.style.left = (x - 100)+ 'px';
                prism.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(prism);
            }

        },
        10: function cylinder() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let cylinder = document.createElement('img');
                cylinder.setAttribute('draggable','true')
                cylinder.setAttribute('src','../static/img/cylinder.svg')
                cylinder.classList.add('figure');
                cylinder.classList.add('figure-cylindepyramidr');
                cylinder.style.left = (x - 100)+ 'px';
                cylinder.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(cylinder);
            }
        },
        11: function pyramid5Angel() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let pyramid = document.createElement('img');
                pyramid.setAttribute('draggable','true')
                pyramid.setAttribute('src','../static/img/pyramid5angel.svg')
                pyramid.classList.add('figure');
                pyramid.classList.add('figure-pyramid');
                pyramid.style.left = (x - 100)+ 'px';
                pyramid.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(pyramid);
            }
        },
        12: function scope() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let scope = document.createElement('img');
                scope.setAttribute('draggable','true')
                scope.setAttribute('src','../static/img/scope.svg')
                scope.classList.add('figure');
                scope.classList.add('figure-scope');
                scope.style.left = (x - 100)+ 'px';
                scope.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(scope);
            }
        },
        13: function trapezoid() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let trapezoid = document.createElement('img');
                trapezoid.setAttribute('draggable','true')
                trapezoid.setAttribute('src','../static/img/trapezoid.svg')
                trapezoid.classList.add('figure');
                trapezoid.classList.add('figure-trapezoid');
                trapezoid.style.left = (x - 100)+ 'px';
                trapezoid.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(trapezoid);
            }
        },
        14: function rectangularTrapezoid() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let rTrapezoid = document.createElement('img');
                rTrapezoid.setAttribute('draggable','true')
                rTrapezoid.setAttribute('src','../static/img/rTrapezoid.svg')
                rTrapezoid.classList.add('figure');
                rTrapezoid.classList.add('figure-rTrapezoid');
                rTrapezoid.style.left = (x - 100)+ 'px';
                rTrapezoid.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(rTrapezoid);
            }

        },
        15: function triangulaPrism() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let tPrism = document.createElement('img');
                tPrism.setAttribute('draggable','true')
                tPrism.setAttribute('src','../static/img/triangularprism%20.svg')
                tPrism.classList.add('figure');
                tPrism.classList.add('figure-tPrism');
                tPrism.style.left = (x - 100)+ 'px';
                tPrism.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(tPrism);
            }

        },
        16: function parallelepiped() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let parallelepiped = document.createElement('img');
                parallelepiped.setAttribute('draggable','true')
                parallelepiped.setAttribute('src','../static/img/parallelepiped.svg')
                parallelepiped.classList.add('figure');
                parallelepiped.classList.add('figure-parallelepiped');
                parallelepiped.style.left = (x - 100)+ 'px';
                parallelepiped.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(parallelepiped);
            }

        },
        17: function cone() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let cone = document.createElement('img');
                cone.setAttribute('draggable','true')
                cone.setAttribute('src','../static/img/cone.svg')
                cone.classList.add('figure');
                cone.classList.add('figure-cone');
                cone.style.left = (x - 100)+ 'px';
                cone.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(cone);
            }

        },
        18: function parallelogram () {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let parallelogram = document.createElement('img');
                parallelogram.setAttribute('draggable','true')
                parallelogram.setAttribute('src','../static/img/parallelogram.svg')
                parallelogram.classList.add('figure');
                parallelogram.classList.add('figure-parallelogram');
                parallelogram.style.left = (x - 100)+ 'px';
                parallelogram.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(parallelogram);
            }

        },
        19: function tetrahedron () {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let parallelogram = document.createElement('img');
                parallelogram.setAttribute('draggable','true')
                parallelogram.setAttribute('src','../static/img/tetrahedron.svg')
                parallelogram.classList.add('figure');
                parallelogram.classList.add('figure-tetrahedron');
                parallelogram.style.left = (x - 100)+ 'px';
                parallelogram.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(parallelogram);
            }

        },
        20: function pentagon () {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let pentagon = document.createElement('img');
                pentagon.setAttribute('draggable','true')
                pentagon.setAttribute('src','../static/img/pentagon.svg')
                pentagon.classList.add('figure');
                pentagon.classList.add('figure-pentagon');
                pentagon.style.left = (x - 100)+ 'px';
                pentagon.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(pentagon);
            }

        },
        21: function rightTriangle() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let rightTriangle = document.createElement('img');
                rightTriangle.setAttribute('draggable','true')
                rightTriangle.setAttribute('src','../static/img/rightTriangle%20.svg')
                rightTriangle.classList.add('figure');
                rightTriangle.classList.add('figure-rightTriangle');
                rightTriangle.style.left = (x - 100)+ 'px';
                rightTriangle.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(rightTriangle);
            }
        },
        22: function triangle() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let triangle = document.createElement('img');
                triangle.setAttribute('draggable','true')
                triangle.setAttribute('src','../static/img/triangle.svg')
                triangle.classList.add('figure');
                triangle.classList.add('figure-triangle');
                triangle.style.left = (x - 100)+ 'px';
                triangle.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(triangle);
            }
        },
        23: function correctTriangle() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let correctTriangle = document.createElement('img');
                correctTriangle.setAttribute('draggable','true')
                correctTriangle.setAttribute('src','../static/img/correctTriangle.svg')
                correctTriangle.classList.add('figure');
                correctTriangle.classList.add('figure-correctTriangle');
                correctTriangle.style.left = (x - 100)+ 'px';
                correctTriangle.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(correctTriangle);
            }
        },
        24: function pyramid4Angel() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let pyramid4Angel = document.createElement('img');
                pyramid4Angel.setAttribute('draggable','true')
                pyramid4Angel.setAttribute('src','../static/img/pyramid4angel.svg')
                pyramid4Angel.classList.add('figure');
                pyramid4Angel.classList.add('figure-pyramid4Angel');
                pyramid4Angel.style.left = (x - 100)+ 'px';
                pyramid4Angel.style.top = (y - 100 ) + 'px';
                wrapper.appendChild(pyramid4Angel);
            }
        },
        28: function drag() {
            flag = false;
            let figuresArray = document.getElementsByClassName('figure')
            let textArray = document.getElementsByClassName('text')
            for (let i =0; i < textArray.length;i++) {
                textArray[i].addEventListener('mousemove', function () {
                    this.style.cursor = 'pointer';
                })
                textArray[i].addEventListener('dragend', function (event) {
                    let itemH = textArray[i].clientHeight;
                    let itemW = textArray[i].clientWidth;
                    textArray[i].style.top = (event.pageY - itemH / 2) + 'px';
                    textArray[i].style.left = (event.pageX - itemW / 2) + 'px';
                })
            }
            for (let i = 0; i < figuresArray.length; i++) {
                figuresArray[i].addEventListener('mousemove', function () {
                    this.style.cursor = 'pointer';
                })
                figuresArray[i].addEventListener('dragend', function (event) {
                    let itemH = figuresArray[i].clientHeight;
                    let itemW = figuresArray[i].clientWidth;
                    figuresArray[i].style.top = (event.pageY - itemH / 2) + 'px';
                    figuresArray[i].style.left = (event.pageX - itemW / 2) + 'px';
                })
            }
        },
        29: function fullScreen() {
            document.documentElement.requestFullscreen();
            let fullScreenButton = document.getElementById('fullScreenButton');
            fullScreenButton.addEventListener('click', function () {
                document.exitFullscreen();
            })
        },
        30: function changeSize() {
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



