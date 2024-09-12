// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// SOLUTION:

function descendingOrder(n){
  const order = String(n) // сначала мы преобразуем наше число в строку
  .split('') // затем разбиваем строку и массив
  .map(Number) // преобразуем обтрано из строки в число
  .sort((a, b) => b - a) // сортируем числа по убыванию
  .join('') // соединяем

  return Number(order) // делаем обратно число
}
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
