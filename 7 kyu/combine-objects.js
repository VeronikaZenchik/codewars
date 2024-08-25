// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.


// SOLUTION


function combine(...arr) { // когда не знаем какое количесвто может прийти объектов
  const result = {}
  for(let i = 0; i < arr.length; i++){
    const keys = Object.keys(result) // даст массив ключей в объекте
    for(key in arr[i]){
        if(keys.includes(key)){
          result[key] = result[key] + arr[i][key]
        } else {
          result[key] = arr[i][key]
        }
    }
  }
  return result
}
console.log(result);