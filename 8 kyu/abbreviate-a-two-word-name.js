// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// SOLUTION:

function abbrevName(name){

  const result = name.split(' ').map(i => i[0].toUpperCase()).join('.')
return result;


}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Evan Cole"));

