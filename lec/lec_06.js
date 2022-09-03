async function main() {

    // must initiate a graphic like C, it activates the 2D context in HTML5 cannvas
    initgraph();

    var n, i, k, dy, dx;
    var y, temp;
    var a = [[], [], [], [], [], [], [], [], [], []], xi = [[], [], [], [], [], [], [], [], [], []];
    var slope = [];
    // clrscr()
    n = parseInt(prompt("Enter the number of edges of polygon:"))
    for (i = 0; i < n; i++) {
        a[i][0] = parseInt(prompt(`Enter the coordinate:(${i},0):`))
        a[i][1] = parseInt(prompt(`Enter the coordinate:(${i},1):`))
    }

    a[n][0] = a[0][0]
    a[n][1] = a[0][1]

    for (i = 0; i < n; i++) {
        console.log(a[i][0])
        console.log(a[i][1])
        console.log(a[i + 1][0])
        console.log(a[i + 1][1])
        //line(10,10,20,20)
        line(parseInt(a[i][0]), parseInt(a[i][1]), parseInt(a[i + 1][0]), parseInt(a[i + 1][1]))
    }

    for (i = 0; i < n; i++) {
        dy = a[i + 1][1] - a[i][1]
        dx = a[i + 1][0] - a[i][0]

        if (dy == 0) slope[i] = 1.0;
        if (dx == 0) slope[i] = 0.0;
        if (dy != 0 && dx != 0) slope[i] = parseFloat(dx / dy);
    }


    for (y = 0; y < 480; y++) {
        k = 0;
        for (i = 0; i < n; i++) {
            if ((a[i][1] <= y && a[i + 1][1] > y) || (a[i][1] > y && a[i + 1][1] <= y)) {
                xi[k] = parseInt(a[i][0] + slope[i] * (y - a[i][1]))
                k++;
            }
        }


        for (i = 0; i < k - 1; i++) {
            if (xi[i] > xi[i + 1]) {
                temp = xi[i]
                xi[i] = xi[i + 1]
                xi[i + 1] = temp
            }
        }

        for (i = 0; i < k; i++) {
            line(xi[i], y, xi[i + 1] + 1, y)
        }
    }


}