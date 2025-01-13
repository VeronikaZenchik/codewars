// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// SOLUTION:

const  sumTwoSmallestNumbers = (numbers) => {  
let sortNum = numbers.sort((a, b) => a - b)
let sliceNum = sortNum.slice(0,2)
let result = 0
for (let i = 0; i < sliceNum.length; i++) {
  result += sliceNum[i]
  
}
return result
}
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));


// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a,b) => a - b);
//   return numbers[0] + numbers[1];
// };
