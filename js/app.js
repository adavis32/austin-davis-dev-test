$(document).foundation();

let circle = document.getElementById('circle');
let prevMousePos;
let newMousePos;
let mousePos;

circle.onmousemove = mouseMove;
setInterval(getMousePos, 100);

function mouseMove (e) {
    let pageX;
    let pageY;

    e = e || window.e;

    mousePos = {
        x: e.pageX,
        y: e.pageY
    };
}

function getMousePos () {
    prevMousePos = newMousePos; 
    newMousePos = mousePos;

    if (prevMousePos.x > newMousePos.x) {
        circle.style.transform = 'rotate(180deg)';
    } else {
        circle.style.transform = 'rotate(-180deg)';
    }

    if (prevMousePos.y > newMousePos.y) {
        circle.style.transform = 'rotate(-180deg)';   
    } else {
        circle.style.transform = 'rotate(180deg)';
    }
}