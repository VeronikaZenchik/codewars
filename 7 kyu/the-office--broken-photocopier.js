// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.


// SOLUTION:

const broken = (x) => {
let array = x.split("")
let result = []
array.map((el) => {
  if(el === "1"){
    result.push("0")
  }
  if (el === "0") {
    result.push("1")
  }
})

return result.join("")
}

console.log(broken("1"));
console.log(broken("100010"));

