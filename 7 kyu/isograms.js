// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// SOLUTION:

function isIsogram(str){

  if(str === ""){
    return true
  }

  let lower = str.toLowerCase()
  for (let i = 0; i < lower.length; i++) {
    // Если символ встречается в строке после текущей позиции, это не изограмма
    if (lower.indexOf(lower[i], i + 1) !== -1) {
      return false;
    }
  }

  return true; // Если дубликатов не найдено, это изограмма

}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isIsogram"));
