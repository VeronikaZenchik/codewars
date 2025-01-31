// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


// SOLUTION:

const humanYearsCatYearsDogYears = function(humanYears) {
  let catYear = 0
  let dogYear = 0

  if(humanYears === 1){
    catYear =+ 15
    dogYear += 15
  } else if(humanYears > 1 && humanYears <= 2){
    catYear += 15 + 9
    dogYear += 15 + 9
  } else {
    catYear =+ 15 + 9 + (4 * (humanYears - 2))
    dogYear += 15 + 9 + (5 * (humanYears - 2))
  }

  return [humanYears,catYear, dogYear];
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(3));
console.log(humanYearsCatYearsDogYears(10));
