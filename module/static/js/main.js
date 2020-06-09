let workPlace = document.getElementById('workPlace');
let wrapper = document.getElementById('wrapper');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let flag = true;
let textFlag = false;
let myColor;
let brushSize;

function resizeFigure() {
    let figureArray = document.getElementsByClassName('figureBox');
    console.log(figureArray)
    for (let i = 0; i < figureArray.length;i++) {
        figureArray[i].addEventListener('mouseover',function () {
            figureArray[i].setAttribute('id','resizable')
            $( function() {
                $( "#resizable" ).resizable({
                });
            } );
            figureArray[i].addEventListener('mouseout',function () {
                figureArray[i].setAttribute('id','')

            })
        })
    }
}

function settingsGraphical() {
    let toolsSettings = document.getElementById('tools-settings');
    toolsSettings.style.left = (innerWidth /2 - 200) + 'px';
    let blackColor = document.getElementById('colorBoxBlack')
    let redColor = document.getElementById('colorBoxRed')
    let greenColor = document.getElementById('colorBoxGreen')
    let yellowColor = document.getElementById('colorBoxYellow')
    let xs = document.getElementById('toolsSizeXS')
    let s = document.getElementById('toolsSizeS')
    let md = document.getElementById('toolsSizeMD')
    let lg = document.getElementById('toolsSizeLG')
    blackColor.addEventListener('click',function () {
        myColor = 'black';
    })
    redColor.addEventListener('click',function () {
        myColor = 'red';
    })
    greenColor.addEventListener('click',function () {
        myColor = 'green';
    })
    yellowColor.addEventListener('click',function () {
        myColor = 'yellow';
    })
    xs.addEventListener('click',function () {
        brushSize = '1'
    })
    s.addEventListener('click',function () {
        brushSize = '4'
    })
    md.addEventListener('click',function () {
        brushSize = '8'
    })
    lg.addEventListener('click',function () {
        brushSize = '10'
    })
}
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
function calculatorHide() {
    let showButton = document.getElementById('tools-calculator-showButton');
    let calculator = document.getElementById('tools-calculator');
    calculator.style.left = (innerWidth / 2) - 200 + 'px';
    showButton.addEventListener('click',function () {
        calculator.style.bottom = 20 + 'px';
        showButton.addEventListener('click',function () {
            calculator.style.bottom = -330 + 'px'
            calculatorHide();
        })
    })

}
function calculator() {
    let display = document.getElementById('calcInput');
    let displayContent = display.textContent;
    let buttonArray = {
        0: document.getElementById('C0'),
        1: document.getElementById('C1'),
        2: document.getElementById('C2'),
        3: document.getElementById('C3'),
        4: document.getElementById('C4'),
        5: document.getElementById('C5'),
        6: document.getElementById('C6'),
        7: document.getElementById('C7'),
        8: document.getElementById('C8'),
        9: document.getElementById('C9'),
        10: document.getElementById('CPoint'),
        11: document.getElementById('CEqually'),
        12: document.getElementById('CPLus'),
        13: document.getElementById('CMinus'),
        14: document.getElementById('CClear'),
        15: document.getElementById('CMultiply'),
    }
    buttonArray["0"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '0';
    })
    buttonArray["1"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '1';
    })
    buttonArray["2"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '2';
    })
    buttonArray["3"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '3';
    })
    buttonArray["4"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '4';
    })
    buttonArray["5"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '5';
    })
    buttonArray["6"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '6';
    })
    buttonArray["7"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '7';
    })
    buttonArray["8"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '8';
    })
    buttonArray["9"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '9';
    })
    buttonArray["10"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '.';
    })
    buttonArray["11"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = eval(displayContent)
    })
    buttonArray["12"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '+';
    })
    buttonArray["13"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '-';
    })
    buttonArray["14"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = ''
    })
    buttonArray["15"].addEventListener('click',function () {
        displayContent = display.textContent;
        display.textContent = displayContent + '*';
    })

}
function chooseTool() {
    let funcArray = {
        0: function brush() {
            canvas.onmousedown = function (event) {
                canvas.onmousemove = function (event) {
                    let x1 = event.offsetX;
                    let y1 = event.offsetY;
                    ctx.beginPath();
                    ctx.strokeStyle = myColor;
                    ctx.lineWidth = brushSize;
                    ctx.moveTo(x1 - 5, y1 + 10);
                    canvas.onmousemove = function (event) {
                        let x2 = event.offsetX;
                        let y2 = event.offsetY;
                        ctx.lineTo(x2, y2 + 10);
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
        2: function eraser() {
            canvas.onmousedown = function (event) {
                canvas.onmousemove = function (event) {
                    let x = event.offsetX;
                    let y = event.offsetY;
                    ctx.clearRect(x, y + 15, brushSize, brushSize);
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

                    textBox.addEventListener('keydown', function (event) {
                        if (event.code == 'Enter') {
                            let textBoxContent = textBox.value;
                            let textBoxPar = document.createElement('div');
                            textBoxPar.textContent = textBoxContent;
                            textBoxPar.classList.add('text')
                            textBoxPar.setAttribute('draggable', 'true');
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
                let figureBox = document.createElement('div');
                // let square = document.createElement('img');
                figureBox.setAttribute('draggable', 'true')
                // square.setAttribute('src', '../static/img/square.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('ui-widget-content');
                // square.classList.add('figure-square');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(square);
                figureBox.classList.add('figureBox')
                figureBox.classList.add('figure-square')
                wrapper.appendChild(figureBox);
                resizeFigure();
            }
        },
        5: function rectangle() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                let figureBox = document.createElement('div');
                // let rectangle = document.createElement('img');
                figureBox.setAttribute('draggable', 'true')
                // rectangle.setAttribute('src', '../static/img/rectangle.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-rectangle');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(rectangle);
                figureBox.classList.add('figure-rectangle')
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let cube = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // cube.setAttribute('src', '../static/img/cube.svg')
                figureBox.classList.add('figure');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(cube);
                figureBox.classList.add('figureBox')
                figureBox.classList.add('figure-cube')

                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let circle = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // circle.setAttribute('src', '../static/img/circle.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-circle');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(circle);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let rhombus = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // rhombus.setAttribute('src', '../static/img/rhombus.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-rhombus');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(rhombus);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let prism = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // prism.setAttribute('src', '../static/img/prism6angels.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-prism6Angels');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(prism);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let cylinder = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // cylinder.setAttribute('src', '../static/img/cylinder.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-cylindepyramidr');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(cylinder);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let pyramid = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // pyramid.setAttribute('src', '../static/img/pyramid5angel.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-pyramid5Angels');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(pyramid);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let scope = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // scope.setAttribute('src', '../static/img/scope.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-scope');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(scope);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();
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
                // let trapezoid = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // trapezoid.setAttribute('src', '../static/img/trapezoid.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-trapezoid');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(trapezoid);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();
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
                // let rTrapezoid = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // rTrapezoid.setAttribute('src', '../static/img/rTrapezoid.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-rTrapezoid');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(rTrapezoid);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let tPrism = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // tPrism.setAttribute('src', '../static/img/triangularprism%20.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-tPrism');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(tPrism);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let parallelepiped = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // parallelepiped.setAttribute('src', '../static/img/parallelepiped.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-parallelepiped');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(parallelepiped);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();
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
                // let cone = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // cone.setAttribute('src', '../static/img/cone.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-cone');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(cone);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();
            }

        },
        18: function parallelogram() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                // let parallelogram = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // parallelogram.setAttribute('src', '../static/img/parallelogram.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-parallelogram');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(parallelogram);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

            }

        },
        19: function tetrahedron() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                // let parallelogram = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // parallelogram.setAttribute('src', '../static/img/tetrahedron.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-tetrahedron');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(parallelogram);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

            }

        },
        20: function pentagon() {
            flag = true;
            canvas.onmousedown = function (event) {
                if (flag == false) {
                    return;
                }
                let x = event.offsetX;
                let y = event.offsetY;
                // let pentagon = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // pentagon.setAttribute('src', '../static/img/pentagon.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-pentagon');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(pentagon);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let rightTriangle = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // rightTriangle.setAttribute('src', '../static/img/rightTriangle%20.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-rightTriangle');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(rightTriangle);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let triangle = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // triangle.setAttribute('src', '../static/img/triangle.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-triangle');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(triangle);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();
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
                // let correctTriangle = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // correctTriangle.setAttribute('src', '../static/img/correctTriangle.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add('figure-correctTriangle');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(correctTriangle);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();

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
                // let pyramid4Angel = document.createElement('img');
                let figureBox = document.createElement('div');
                figureBox.setAttribute('draggable', 'true')
                // pyramid4Angel.setAttribute('src', '../static/img/pyramid4angel.svg')
                figureBox.classList.add('figure');
                figureBox.classList.add(' ');
                figureBox.style.left = (x - 100) + 'px';
                figureBox.style.top = (y - 100) + 'px';
                // figureBox.appendChild(pyramid4Angel);
                figureBox.classList.add('figureBox')
                wrapper.appendChild(figureBox);
                resizeFigure();
            }
        },
        27: function drag() {
            flag = false;
            let figuresArray = document.getElementsByClassName('figureBox')
            let textArray = document.getElementsByClassName('text')
            for (let i = 0; i < textArray.length; i++) {
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
                figuresArray[i].addEventListener('click',function () {
                    let itemH = figuresArray[i].clientHeight;
                    let itemW = figuresArray[i].clientWidth;
                })
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
        28: function fullScreen() {
            document.documentElement.requestFullscreen();
            let fullScreenButton = document.getElementById('fullScreenButton');
            fullScreenButton.addEventListener('click', function () {
                document.exitFullscreen();
            })
        },
        29: function uploadImage() {
            document.getElementById('uploadFile').onchange = function (event) {
                let file = this.files;
                let filePath = file.valueOf();
                console.log(filePath)
                let uploadImage = document.createElement('img');

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
calculatorHide();
calculator();
settingsGraphical();
