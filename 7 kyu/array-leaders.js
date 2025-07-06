// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives , negatives and zeros
// Repetition of numbers in the array/list could occur.
// Returned Array/list should store the leading numbers in the same order in the original array/list .


// SOLUTION:


function arrayLeaders(numbers){
  let maxRight = []
  let rightSum = 0
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > rightSum) {
      maxRight.push(numbers[i])
    }
    rightSum+=numbers[i]
    
  }
  return maxRight.reverse()
}
console.log(arrayLeaders([1,2,3,4,0]));

