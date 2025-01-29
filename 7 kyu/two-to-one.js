// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// SOLUTION:

function longest(s1, s2) {
 // Объединяем обе строки
  const combined = s1 + s2;

   // Сортируем символы
  let sortedArr = combined.split("").sort();

let uniqueLetters = []

    // Проходим по отсортированному массиву
    for (let i = 0; i < sortedArr.length; i++) {
      // Добавляем символ в uniqueLetters, только если он не равен предыдущему
      if (i === 0 || sortedArr[i] !== sortedArr[i - 1]) {
          uniqueLetters.push(sortedArr[i]);
      }
  }

  // Объединяем уникальные символы в строку и возвращаем
  return uniqueLetters.join("");

}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));



// function longest(s1, s2) {

//   s3 = s1 + s2;
//   s4 = s3.split("");
//   s4 = s4.sort().filter(function(element, index, array){
//     return element !== array[index - 1];
//   });
//   return s4.join("");
// }