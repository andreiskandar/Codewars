// 7 kyu - Unlimited Sum

// Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

// The function should reject any arguments that are not integers, and sum the remaining integers.

// sum(1, 2, 3)   // -> 6
// sum(1, "2", 3) // -> 4

function sum() {
  return [...arguments].reduce((total, el) => {
    total += Number.isInteger(el) ? el : 0;
    return total;
  }, 0);
}

console.log(sum(1, 11, 111), 123);
console.log(sum(4, true, 4, 'A', 4, '99'), 12);
