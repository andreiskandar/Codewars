/*
7kyu - Simple remove duplicates
In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
*/

function solve(arr) {
  let output = [];
  arr.reverse();
  for (let i of arr) {
    if (!output.includes(i)) {
      output.push(i);
    }
  }
  return output.reverse();
}

// function solve(arr){
//   return arr.filter((val,i) => arr.lastIndexOf(val) == i);
// }
console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);

// Expected: [4, 5, 2, 1], instead got: [1, 4, 5, 2]
// Expected: [4, 6, 3], instead got: [3, 4, 6]
// Unhandled rejection TestError: Expected: [4, 6, 3], instead got: [3, 4, 6]
