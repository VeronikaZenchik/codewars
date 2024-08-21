// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined



// SOLUTION:

function countSheeps(sheep) {
    if(!sheep === true) {
      return false
    }
      return true

  }
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));

  // function predicate(num) {
  //   if (num >= 5) {
  //     return true
  //   }
  
  //   return false
  // }
  
  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

