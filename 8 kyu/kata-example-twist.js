// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.


// SOLUTION:

// add the value "codewars" to the websites array 1,000 times
let websites = []
let value = "codewars"
let length = 1000

for (let i = 0; i < length; i++) {
  websites.push(value);
  
}

console.log(websites)