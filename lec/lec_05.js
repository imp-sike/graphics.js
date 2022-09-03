var xc, x;
var yc, y;

async function main() {
    // to implement oval drawing algorithm
    initgraph();

    var rx, ry;
    var p1, p2;

    xc = parseInt(prompt("Enter the center point x-coordinate:"))
    yc = parseInt(prompt("Enter the center point y-coordinate:"))
    var rx = parseInt(prompt("Enter the center point Rx:"))
    var ry = parseInt(prompt("Enter the center point Ry:"))

    x = 0
    y = ry

    await disp()

    p1 = ((ry * ry) - (rx * rx * ry) + (rx * rx)) / 4
    while ((2.0 * ry * ry * x) <= (2.0 * rx * rx * y)) {
        x++;
        if (p1 <= 0) {
            p1 = p1 + (2.0 * ry * ry * x) + (ry * ry)
        }
        else {
            y--;
            p1 = p1 + (2.0 * ry * ry * x) - (2.0 * rx * rx * y) + (ry * ry)
        }
        await disp();
        x = -x
        await disp();
        x = -x;
    }

    x = rx;
    y = 0;
    await disp();
    p2 = ((rx * rx) - 2.0 * (ry * ry * rx) + (ry * ry)) / 4
    while ((2.0 * ry * ry * x) > (2.0 * rx * rx * y)) {
        y++;
        if (p2 > 0) {
            p2 = p2 - (2.0 * rx * rx * y) + (rx * rx)
        }
        else {
            x--;
            p2 = p2 + (2.0 * ry * ry * x) - (2.0 * rx * rx * y) + (rx * rx)
        }
        await disp();
        y = -y
        await disp();
        y = -y;
    }
    closegraph();
}
async function disp() {
    await delay(50)
    putpixel(xc + x, yc + y, "#ffffff")
    putpixel(xc - x, yc + y, "#ffffff")
    putpixel(xc + x, yc - y, "#ffffff")
    putpixel(xc - x, yc - y, "#ffffff")
}
main()