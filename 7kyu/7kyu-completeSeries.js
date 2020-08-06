// 7kyu - Complete Series

// You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

// If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

// inputs        outputs
// [2,1]     ->  [0,1,2]
// [1,4,4,6] ->  [0]
// Notes: all numbers are positive integers.

// This is set of example outputs based on the input sequence.

// inputs        outputs
// [0,1]   ->    [0,1]
// [1,4,6] ->    [0,1,2,3,4,5,6]
// [3,4,5] ->    [0,1,2,3,4,5]
// [0,1,0] ->    [0]

function completeSeries(arr) {
	let output = [];
	const max = Math.max(...arr);
	const set = [...new Set(arr)];
	if (set.length !== arr.length) {
		return [0];
	} else {
		let i = 0;
		while (i <= max) {
			output.push(i);
			i++;
		}
		return output;
	}
}

// function completeSeries(arr) {
//   return new Set(arr).size === arr.length ? [...Array(Math.max(...arr)+1).keys()] : [0];
// }

console.log(completeSeries([1, 4, 6]));
