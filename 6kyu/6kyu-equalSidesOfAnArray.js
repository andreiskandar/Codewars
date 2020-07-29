/*
6 kyu - equal sides of an Array

https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
*/

function findEvenIndex(arr) {
  let leftSum = 0,
    rightSum = 0;
  let index;
  for (let i of arr) {
    leftSum += i;
  }
  console.log(leftSum);
  for (let i = 0; i < arr.length; i++) {
    leftSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    rightSum += arr[i];
    console.log(rightSum);
  }

  return -1;
}

console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
