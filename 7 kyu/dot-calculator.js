// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""


//SOLUTION:


const dotCalculator = (equation) => {

  let arr = equation.split(" ")
  let left = arr[0].length
  let right = arr[2].length
  let operator = arr[1]
  let str = "."
  let result = 0


if (operator === "+") {
  result = left + right
} else if (operator === "-"){
  result = left - right
} else if (operator === "*"){
  result = left * right
} else if (operator === "//"){
    result = Math.floor(left / right)
} else {
  console.log("Error");
}

return str.repeat(result)
}

console.log(dotCalculator("..... // .."));
