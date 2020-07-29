// 7kyu - reverselt

// You have to create a function named reverseIt.

// Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

// Examples of inputs and subsequent outputs:

// "Hello" -> "olleH"

// "314159" -> "951413"

// [1,2,3] -> [1,2,3]

function reverseIt(data) {
  if (typeof data === 'string' || typeof data === 'number') {
    if (typeof data === 'number') {
      return Number([...data.toString()].reverse().join(''));
    } else return [...data].reverse().join('');
  } else return data;
}

console.log(reverseIt(3812797));
