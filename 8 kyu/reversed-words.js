// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// SOLUTION:

function reverseWords(str){
  const result = str.split(' ').reverse().join(' ')
  return result;
}



console.log(reverseWords("hello world!"                 ));
console.log(reverseWords("yoda doesn't speak like this" ));

