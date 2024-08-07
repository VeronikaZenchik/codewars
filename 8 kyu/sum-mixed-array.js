// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// SOLUTION:

function sumMix(x){

  let sum = 0;
  for(let i = 0; i < x.length; i++) {
    sum = sum + Number(x[i])
  }
  return sum
}
console.log(sumMix([11, 15, '4']));

// можно решить с помощью метода reduce

// function sumMix(x){
//   return x.reduce((sum, current) => sum + Number(current), 0);
// }
// console.log(sumMix([9, 3, '7', '3']));

