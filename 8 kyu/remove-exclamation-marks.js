// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// SOLUTION:

function removeExclamationMarks(s) {
  let strToArray = s.split("")
  let result =[]
  for (let i = 0; i < strToArray.length; i++) {
    if(!strToArray[i].includes('!')){
      result.push(strToArray[i])
    }
    
    
  }
  return result.join("")
}
console.log(removeExclamationMarks("Hello World!"));


// function removeExclamationMarks(s) {
//   return s.replaceAll('!', '');
// }