// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.


// SOLUTION:


const largestPairSum = (numbers) => {
  let sortArr = numbers.sort((a, b) => b - a)
  let largeNum = sortArr.slice(0,2)
  let result = 0
  for (let i = 0; i < largeNum.length; i++) {
    result += largeNum[i];
  }

  return result
}

console.log(largestPairSum([10,14,2,23,19]));
