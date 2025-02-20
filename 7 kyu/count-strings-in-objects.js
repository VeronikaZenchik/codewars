// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3


// SOLUTION:

function strCount(obj){
  let count = 0;

  // Helper function to check the type of each value
  function countStrings(value) {
    // If the value is a string, increment the count
    if (typeof value === "string") {
      count++;
    }

    // If the value is an object and not null, we iterate through its properties
    if (value && typeof value === "object") {
      for (let key in value) {
        // Call the function recursively for each property
        countStrings(value[key]);
      }
    }
  }

  // Start counting with the input object
  countStrings(obj);
  
  return count;
  }

  console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{}
  }));
  