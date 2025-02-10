// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


// SOLUTION:

function smallEnough(a, limit){
for (let i = 0; i < a.length; i++) {
  if (a[i] > limit) {
    return false
}
}
return true

}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));


//Вместо возврата true внутри цикла, вы должны продолжать проверять все элементы массива.
// Вам нужно возвращать false, если хотя бы одно значение превышает лимит.