// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.


// SOLUTION:

function rowWeights(array){
  let resultFirst = 0
  let resultSecond = 0
for (let i = 0; i < array.length; i++) {
  if(i % 2 === 0){
    resultFirst += array[i]
  } else {
    resultSecond += array[i]
  }
  
}
return [resultFirst, resultSecond]
}

console.log(rowWeights([80]));
console.log(rowWeights([50,60,70,80])); //120,140
