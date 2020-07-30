// // 7kyu - Math Object Madness
// Math Object Madness
// You are a(n) novice/average/experienced/senior/professional/world-class Developer (choose one) who specialises in Javascript. One day, your naughty little brother/sister/whatever gets hold of your precious computer with all the software and functionality in it and manages to utterly destroy the Javascript Math object! Being the Developer that you are, you decide to recover as much of the functionality as possible.

// Objective
// Most, if not all, of the functionality of Javascript's built-in Math object is disabled. Your goal is to recover the following:

// Math.ceil(x)
// Math.floor(x)
// Math.round(x)
// Math.abs(x)
// Math.max(args[]) (CAUTION: A variable number of arguments will be passed into the function)
// Math.min(args[]) (CAUTION: A variable number of arguments will be passed into the function)
// Math.pow(x,y) (you may assume the exponent is always a positive integer)
// You may also attempt to fix other methods such as Math.random() or Math.cos() but your code for the other methods will not be tested.

Math.ceil = (x) => {
  let rem = x % 1;
  return rem == 0 ? x : 1 + parseInt(x);
};

Math.floor = (x) => parseInt(x);

Math.round = (x) => {
  const rem = x % 1;
  return rem < 0.4999 ? parseInt(x) : 1 + parseInt(x);
};

Math.abs = (x) => (x < 0 ? -1 * x : x);

Math.max = (...arguments) =>
  [...arguments].reduce((max, curr) => (curr > max ? curr : max));

Math.min = (...arguments) =>
  [...arguments].reduce((max, curr) => (curr < max ? curr : max));

Math.pow = (x, y) => x ** y;

console.log(Math.max(-2.6, 3, -7, 3, 21, 2));
console.log(Math.floor(9 / 4));
