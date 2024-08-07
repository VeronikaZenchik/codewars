function findSmallestInt(arr) {
  let smallestInteger = Infinity;
  for(let i = 0; i < arr.length; i++) {
    if(smallestInteger > arr[i]) {
        smallestInteger = arr[i];
      }
    }
  return smallestInteger;
}
console.log(findSmallestInt([75, 12, 35]));