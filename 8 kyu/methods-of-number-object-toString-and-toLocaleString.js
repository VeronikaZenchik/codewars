// Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"


// SOLUTION:

function colorOf(r,g,b){
  let rColor = r.toString(16)
  let gColor = g.toString(16)
  let bColor = b.toString(16)
  if (rColor.length < 2) {
    rColor = '0' + rColor;
  }
  if (gColor.length < 2) {
    gColor = '0' + gColor;
  }
  if (bColor.length < 2) {
    bColor = '0' + bColor;
  }
  return "#" + rColor + gColor + bColor
}
console.log(colorOf(255,0,0));
console.log(colorOf(0, 111,0));