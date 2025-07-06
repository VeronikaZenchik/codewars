// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives and negatives also zeros_
// Repetition of numbers in the array/list could occur.
// The Maximum Gap is computed Regardless the sign.


// SOLUTION:

const maxGap = (numbers) => {
  let sort = [...numbers].sort((a,b) => a -b)
  let rightNum = 0

  for (let i = 0; i < sort.length - 1; i++) {
    let sub = Math.abs(sort[i] - sort[i + 1])
    if (sub > rightNum) {
      rightNum = sub
    }
  }
  return rightNum
}

console.log(maxGap([13,10,2,9,5]));


