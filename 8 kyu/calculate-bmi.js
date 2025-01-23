// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// SOLUTION:

function bmi(weight, height) {
  let bmi = weight / height**2
  if(bmi <= 18.5){
    return `"Underweight", for weight = ${weight} and height =${height}"`
  } else if (bmi <= 25.0) {
    return `"Normal", for weight = ${weight} and height =${height}"`
  } else if (bmi <= 30.0){
    return `"Overweight", for weight = ${weight} and height =${height}"`
  } else {
        return `"Obese", for weight = ${weight} and height =${height}"`
  }
}

console.log(bmi(50, 1.80)); // "Underweight", "For weight = 50 and height = 1.80"
