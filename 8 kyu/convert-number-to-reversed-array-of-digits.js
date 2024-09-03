// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// SOLUTION:

const digitize = (n) => {
  return [...String(n)].map(Number).reverse()  
} 

console.log(digitize(35231));

//return String(n) // Преобразуем число в строку
// .split('') // Разбиваем строку на массив символов
// .reverse() // Обращаем массив
// .map(Number); // Преобразуем каждый символ обратно в число
