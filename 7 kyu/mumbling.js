// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// SOLUTION:

const accum = (s) => {
let strToArr = s.split("")


const result = strToArr.map((char, index) => {
  const repeatedChar = char.repeat(index + 1);
  return repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1).toLowerCase();
});


return result.join("-")
}

console.log(accum("ZpglnRxqenU"));
