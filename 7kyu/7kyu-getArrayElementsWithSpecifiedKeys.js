// 7kyu - Get array elements with specified keys

// Create a function that lets people easily grab only the array elements with given keys.

// For example:

// var array = ['a', 'b', 'c', 'd', 'e'];
// array2 = array.only([0, 3]);
// // at this point array2 should be ['a', 'd']
// Note: The order of the elements should be preserved in the resulting array.

Array.prototype.only = function (keys) {
  let output = []
  const key = keys.sort((a, b) => a - b)
  for (let i = 0; i < keys.length; i++) {
    output.push(this[key[i]])
  }
  return output
}

// Short Solution
// Array.prototype.only = function(keys)
// {
//   return this.filter((e,i) => keys.includes(i))
// }
