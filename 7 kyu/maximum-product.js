// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.


// SOLUTION:

function adjacentElementsProduct(array) {
  let maxProduct = -Infinity; // Инициализируем максимальное произведение

  for (let i = 0; i < array.length - 1; i++) {
    // Вычисляем произведение текущего и следующего элемента
    const product = array[i] * array[i + 1];
    // Если это произведение больше текущего максимума, обновляем максимум
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));

