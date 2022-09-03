//bsa algorithm
            /*
This is a basic program to draw a line using graphics.js
graphics.js is similar to graphics.h and contains mostly required functions of graphics.h header
files
*/

async function main() {
    
    var i, x, y, flag=0;
    initgraph();
    /* get mid positions in x and y-axis */
    x = 700 / 2;
    y = 30;


   while (true) {
       if(y >= 700-30 || y <= 30)
           flag = !flag;
           /* draws the gray board */
           circle(x, y, 30);
           
           /* delay for 50 milli seconds */
           await delay(50);

           /* clears screen */
           cleardevice();
           if(flag){
               y = y + 5;
           } else {
               y = y - 5;
            }
   }
}

main()

   
   