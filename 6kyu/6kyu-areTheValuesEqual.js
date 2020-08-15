// 6 kyu - Are the values equal?

// Create the areEqual function that will return true if the two supplied arguments hold exactly the same values and the same number of values (not necessarily in the same order) and false if they do not.

// The supplied arguments will be objects, arrays and strings.

// Examples:

// {laura:4, adam:3} & {laura:4, adam:3} => true
// {adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
// [{a:4},{b:3}] & [{b:3},{a:4}]) => true
// {a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
// 'Hello' & 'Hello' => true

// function areEqual(value1, value2) {
//   //how to iterate array that contains object
//   //check if they have the same keys : pairs value
//   // check typeof each value
//   //create an array of value1 key and value2 key
//   //create an array of value1 value and value2 value
//   let v1KeyArr = [], v1ValueArr = [], v2KeyArr = [], v2ValueArr = [];
//   for(let i of value1){
//     v1KeyArr.push(Object.keys(i))
//     v1ValueArr.push(Object.values(i))
//   }
//   for(let i of value2){
//     v2KeyArr.push(Object.keys(i))
//     v2ValueArr.push(Object.values(i))
//   }

//   console.log(v1ValueArr.flat());

//   let found = false;
//   for(let i of v1KeyArr.flat()){
//     if(v2KeyArr.flat().includes(i)){
//       found = true
//     }
//   }
//   found = false
//   for(let i of v1ValueArr.flat()){
//     if(v2ValueArr.flat().includes(i)){
//       found = true
//     }
//   }
//   return found
// }

function areEqual(value1, value2) {
	// if (typeof value1 !== 'object' || typeof value2 !== 'object')
	//   return value1 === value2

	const keys = [...new Set([...Object.keys(value1), ...Object.keys(value2)])];

	console.log(...new Set([...Object.keys(value2)]));

	console.log(keys);
	console.log(value1[0]);
	console.log(value2[0]);

	// return keys.every(key => areEqual(value1[key], value2[key]))
}

console.log(areEqual([{ a: 3 }, { b: '4' }], [{ a: '3' }, { b: '4' }]), false);
