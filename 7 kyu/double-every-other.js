// Write a function that doubles every second integer in a list, starting from the left.

// Example:
// For input array/list :
// [1,2,3,4]

// the function should return :
// [1,4,3,8]

// SOLUTION:

function doubleEveryOther(a) {
  let newArr = a.map((a, index) => {
    if((index + 1) % 2 === 0){
    return a * 2
  } else {
  return a             
  }
})
  return newArr;
}

