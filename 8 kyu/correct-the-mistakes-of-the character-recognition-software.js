// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// SOLUTION:

const correct = (string) =>{
  return string.split('').map(i => {
    if(i === '5') {
      return 'S';
    }
    if(i === '0') {
      return 'O';
    }
    if(i === '1') {
      return 'I';
    }
    return i
  }).join('')
}
console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("PAR15"));


// function correctText(input) {
//   const corrections = {
//       '5': 'S',
//       '0': 'O',
//       '1': 'I'
//   };
  
//   return input.split('').map(i => corrections[i] || i).join('');
// }
