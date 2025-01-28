// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// SOLUTION:

function isPalindrome(x) {
  let string1 = x.toLowerCase()
  let string2 = x.split("").reverse().join("").toLowerCase()

  if (string1 === string2) {
    return true
  }
return false
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("hello"));
