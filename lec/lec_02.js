async function main() {

    initgraph();

    // to implement DAA
    var steps;
    var xincr, yincr, x, y, dx, dy;


    // required points
    var x1 = parseInt(prompt("Enter the value of x1"));
    var y1 = parseInt(prompt("Enter the value of x2"));

    var x2 = parseInt(prompt("Enter the value of y1"));
    var y2 = parseInt(prompt("Enter the value of y2"));


    dx = x2 - x1
    dy = y2 - y1







    if (abs(dx) > abs(dy)) {
        steps = abs(dx)
    }
    else {
        steps = abs(dy)
    }

    xincr = dx / steps
    yincr = dy / steps

    x = x1
    y = y1

    outtextxy(200, 20, "DDA")
    outtextxy(x + 5, y - 5, "(x1,y1)")

    for (var k = 1; k <= steps; k++) {
        await delay(30)
        console.log(x)
        console.log(y)
        y += yincr;
        x += xincr;
        putpixel(round(x), round(y), "#ffffff")
    }

    outtextxy(x + 5, y - 5, "(x2,y2)")
    closegraph()


    function round(elem) {
        return elem + 0.5;
    }
}
main()