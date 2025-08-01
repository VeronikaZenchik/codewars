// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


//SOLUTION:

const gimme = (triplet) => {
let sort = [...triplet].sort((a,b) => b - a)
let middle = sort[1]
let result = []

for (let index = 0; index < triplet.length; index++) {
result = triplet.indexOf(middle)
}

return result
}

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));


