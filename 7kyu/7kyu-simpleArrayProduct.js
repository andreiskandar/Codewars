// 7kyu - Simple Array product
/*
In this Kata, you will be given 2 or more arrays of integers, both positive and negative. Your task is to find the maximum product that can be formed by taking one element from each array.

Examples:
solve([[1, 2],[3, 4]]) = 8, given by 2 * 4
solve([[10,-15],[-1,-3]]) = 45, given by (-15) * (-3)

More examples in test cases. Good luck!
*/

function solve(arr) {
  return arr
    .map((x) => x.reduce((a, b) => (Math.abs(b) > Math.abs(a) ? b : a)))
    .reduce((a, b) => Math.abs(a) * Math.abs(b));
}

console.log(
  solve([
    [14, 2],
    [0, -16],
    [-12, -16]
  ]),
  3584
);
