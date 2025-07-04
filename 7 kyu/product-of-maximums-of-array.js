// Given an array/list [] of integers , Find the product of the k maximal numbers.

// SOLUTION:

const maxProduct = (numbers, size)=> {
  let sorted = numbers.sort((a, b) => b - a)
  
  let max = 1
  for (let i = 0; i < size; i++) {
    max = sorted[i] * max
    
  }

  return max
}

console.log(maxProduct([4, 3, 5], 2));
