// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined



// SOLUTION:

// function countSheeps(sheep) {
//     return sheep.filter(Boolean).length //  Boolean: Когда вы передаете `Boolean` в метод `filter`, он будет вызываться для каждого элемента массива. Если элемент «истинный» , он будет добавлен в новый массив. Если элемент «ложный», он не будет добавлен.
//   }
// console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));



function countSheeps(arrayOfSheep) {
  let num = 0; //наш счетчик овец
  for(let i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++; // увеличение счетчика если нашли овцу
  return num;
}
console.log(countSheeps([true, false, true, true, false, true]));

