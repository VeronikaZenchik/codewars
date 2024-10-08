// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

// SOLUTION:

const squareSum = (numbers) => {
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2
  result += numbers[i]
}
return result
}
console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
