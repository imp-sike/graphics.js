async function main() {
    // to implement circle drawing algorithm
    initgraph();

    var xc, yc, R;
    var xc = parseInt(prompt("Enter the center x-coordinate of circle"));
    var yc = parseInt(prompt("Enter the center y-coordinate of circle"));
    var R = parseInt(prompt("Enter the Radius of circle"));
    outtextxy(100,100,"Circle")


    draw_circle(xc, yc, R)
    closegraph();
}

async function draw_circle(xc, yc, rad) {
    var x = 0
    var y = rad
    var p = 1 - rad

    symmetry(x, y, xc, yc)

    for (x = 0; y > x; x++) {
        if (p < 0) {
            p += 2 * x + 3
        }
        else {
            p += 2 * (x - y) + 5;
            y--;
        }

        symmetry(x, y, xc, yc)
        await delay(50)
    }
}

async function symmetry(x, y, xc, yc) {
    putpixel(xc + x, yc - y, "#ffffff")
    delay(50)
    putpixel(xc + y, yc - x, "#ffffff")
    delay(50)
    putpixel(xc + y, yc + x, "#ffffff")
    delay(50)
    putpixel(xc + x, yc + y, "#ffffff")
    delay(50)
    putpixel(xc - x, yc + y, "#ffffff")
    delay(50)
    putpixel(xc - y, yc + x, "#ffffff")
    delay(50)
    putpixel(xc - y, yc - x, "#ffffff")
    delay(50)
    putpixel(xc - x, yc - y, "#ffffff")
    delay(50)
}