async function main() {

    initgraph();

    // to implement BSA Algorithm


    // required points
    var x1 = parseInt(prompt("Enter the value of x1"));
    var y1 = parseInt(prompt("Enter the value of x2"));

    var x2 = parseInt(prompt("Enter the value of y1"));
    var y2 = parseInt(prompt("Enter the value of y2"));


    var x = x1;
    var y = y1;

    dx = x2 - x1;
    dy = y2 - y1;

    putpixel(x,y,"#ffffff")

    p = 2 * dy - dx;
    while(x<=x2) {
        await delay(20)
        if(p<0) {
            x = x+1;
            p = p+(2*dy);
        } else{
            x = x+1;
            y = y+1;
            p = p+(2*dy)-(2*dx);
            
        }
        putpixel(x,y,"#ff0000")
    }
    closegraph()

}
main();