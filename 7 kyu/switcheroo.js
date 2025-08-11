// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//SOLUTION:

const switcheroo = (x) => {
let res = ""
for (let i = 0; i < x.length; i++) {
 if (x[i] === "a") {
      res += "b"; 
    } else if (x[i] === "b") {
      res += "a";
    } else {
      res += x[i];
    }
  }
  return res;

}


console.log(switcheroo('abc'));
