/*
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) {
  let sum = 0;
  for (let i = n; i >= 1; i /= 2) {
    sum += Math.floor(i);
  }
  return sum;
}
console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
