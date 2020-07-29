// 7kyu - Ordered Count of Characters

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

function orderedCount(str) {
  let sorted = [...new Set(str)];
  return sorted.map((c) => [c, str.split(c).length - 1]);
}

console.log(orderedCount('233312'));
