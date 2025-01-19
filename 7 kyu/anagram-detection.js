// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "fefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"


// SOLUTION:
const isAnagram = (test, original) =>{
  let testArray = test.toLowerCase().split("").sort()
  let originalArray = original.toLowerCase().split("").sort()

  return testArray.join("") === originalArray.join("");

}

console.log(isAnagram("apple", "pale"));

// const isAnagram = function(test, original) {
//   var t = test.toLowerCase().split('').sort().join('');
//   var o = original.toLowerCase().split('').sort().join('');
//   return (t==o)?true:false;
// };