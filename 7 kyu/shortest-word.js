// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// SOLUTION:

function findShort(s){
  return Math.min(...s.split(" ").map(word => word.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("Let's travel abroad shall we"));

