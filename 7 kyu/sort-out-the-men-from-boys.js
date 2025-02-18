// Scenario
// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd!alt!alt

// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt


// SOLUTION:

function menFromBoys(arr){

  const uniqueArr = [...new Set(arr)];
  let even = []
  let odd = [].sort((a,b) => a-b)
  for (let i = 0; i < uniqueArr.length; i++) {
    if (uniqueArr[i] % 2 === 0) {
      even.push(uniqueArr[i])
    } else {
      odd.push(uniqueArr[i])
    } 
  }
  let sortE = even.sort((a,b) => a-b)
  let sortO = odd.sort((a,b) => b-a)
  return [...sortE, ...sortO]
}

console.log(menFromBoys([7,3,14,17]));
console.log(menFromBoys([2,43,95,90,37]));



//пример решения задачи

// function menFromBoys(arr){
//   arr = Array.from(new Set(arr));
//   let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
//   let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
//   return even.concat(odd);
// }