// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// SOLUTION:

const getCount = (str) => {
  let result = 0;
  let strToArray = str.split("")

  for (let i = 0; i < strToArray.length; i++) {
    if (strToArray[i] === "a" || strToArray[i] === "e" || strToArray[i] === "i" || strToArray[i] === "o" || strToArray[i] === "u") {
      result ++
    }
    
  }
  return result

}
console.log(getCount("abracadabra"));

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
