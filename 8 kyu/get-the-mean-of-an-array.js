// Description:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Возвращает среднее значение данного массива, округленное в меньшую сторону до ближайшего целого числа

// SOLUTION:


function getAverage(marks){
  let sum = 0;
  for(let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
  }
  let average = sum / marks.length

  return Math.floor(average)
}
console.log(getAverage([1,1,1,2]));

