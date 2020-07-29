/* 8 Kyu
Coefficients of the Quadratic Equation
https://www.codewars.com/kata/5d59576768ba810001f1f8d6
*/

function quadratic(x1, x2) {
  // Answer in array
  return [1, -(x1 + x2), x1 * x2];
}

console.log(quadratic(-4, -9));
