// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// SOLUTION:

function problem(x){
  // Проверяем, является ли x числом и не равен ли он нулю
  if (typeof x === "number" && x !== 0) {
    return x * 50 + 6; // Возвращаем результат для валидных чисел (кроме 0)
  } else if (x === 0) {
    return 6; // Возвращаем 6, если x равен 0
  }
  return "Error"; // Возвращаем "Error" для остальных случаев
}


console.log(problem("hello"));
console.log(problem(1));