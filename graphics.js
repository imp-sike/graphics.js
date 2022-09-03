var ctx;

// graphics functions
function initgraph() {
    var canvas = document.getElementById('sampleGraphics');
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";


    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
}

function arc(x, y, sangle, eangle, radius) {
    ctx.beginPath();
    ctx.arc(x, y, sangle, eangle, radius);
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
}

function circle(x, y, radius) {
    arc(x, y, radius, 0, 2 * Math.PI, false);
}

function cleardevice() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function ellipse(x, y, stangle, endangle, xradius, yradius) {
    ctx.beginPath();
    ctx.ellipse(x, y, xradius, yradius, stangle, endangle);
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
}

function line(startX, startY, endX, endY) {
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.strokeStyle = "#ffffff";
    ctx.stroke()
}

function putpixel(pos1, pos2, color) {
    ctx.fillStyle = color;
    ctx.fillRect(pos2, pos1, 1, 1);
}

function outtextxy(x, y, text) {
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(text, x, y);
}

function closegraph() {
    console.log("Graphics closed!")
}



// math shorthand functions
function abs(elem) {
    return Math.abs(elem);
}


// dos.h
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// i/o
function input(s) {
    return parseInt(prompt(s));
}
