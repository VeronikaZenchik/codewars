// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// SOLUTION:

function countPositivesSumNegatives(input) {
  if(!input || input.length === 0){
    return []
  }
  //Проверка if (!input || input.length === 0) должна быть выполнена до циклов, чтобы избежать ошибок, если input равен null.

  let countPos = 0
  let resNeg = 0
for (let i = 0; i < input.length; i++) {
  if(input[i] > 0){
    countPos++

  }
}
for (let j = 0; j < input.length; j++) {
  if(input[j] < 0){
    resNeg +=  input[j]
  }
}
return [countPos, resNeg]
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
