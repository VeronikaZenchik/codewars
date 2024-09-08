// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//SOLUTION:

const summation =  (num) => {
  let sum = 0;
  let index = 1;
  while(index <= num){
    sum += index
    index++
  }
  return sum
}

console.log(summation(1));
console.log(summation(8));


//  return (num * (num + 1)) / 2; -- можно еще решить таким способом

//let result = 0;
// for (var i = 1; i <= num; i++) {
//   result += i;
// }

// return result;