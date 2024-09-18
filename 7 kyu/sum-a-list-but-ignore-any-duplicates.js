// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.


// SOLUTION:

// function sumNoDuplicates(numList, i, j) {
//   let result = 0
//   for(i = 0; i < numList.length; i++){
//     for (j = 0; j < numList.length; j++) {
//       if (i===j) {
//         continue
//       }
//       if(numList[i] === numList[j]){
//         break
//       }
//     }
//     if(j === numList.length){
//       result += numList[i]
//     }
//   }
//   return result;
// }

// console.log(sumNoDuplicates([3, 4, 3, 6]));
// console.log(sumNoDuplicates([1, 10, 3, 10, 10]));


// как можно решить по-другому

// const NoDuplicates = numList => {
//   return numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0)
// }

// console.log(NoDuplicates([3, 4, 3, 6]));
// console.log(NoDuplicates([1, 10, 3, 10, 10]));