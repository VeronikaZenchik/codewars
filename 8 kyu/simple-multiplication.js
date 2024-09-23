// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// SOLUTION:

function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8
}

console.log(simpleMultiplication(6));
console.log(simpleMultiplication(1));
