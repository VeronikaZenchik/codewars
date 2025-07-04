// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// SOLUTION:

const minSum =  (arr) => {
  let sort = arr.sort((a, b) => a -b)
  let sum = 0

    for (let i = 0, j = sort.length - 1; i < j; i++, j--) {
        sum += sort[i] * sort[j];
    }
    return sum
}

console.log(minSum([5,4,2,3])); //22

