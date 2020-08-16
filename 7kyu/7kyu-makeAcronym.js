// 7kyu - make Acronym
// Implement a function called makeAcronym that returns the first letters of each word in a passed in string.

// Make sure the letters returned are uppercase.

// If the value passed in is not a string return 'Not a string'.

// If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.

// If the string is empty, just return the string itself: "".

// EXAMPLES:

// 'Hello codewarrior' -> 'HC'

// 'a42' -> 'Not letters'

// 42 -> 'Not a string'

// [2,12] -> 'Not a string'

// {name: 'Abraham'} -> 'Not a string'

var makeAcronym = function (string) {
	if (typeof string !== 'string') return 'Not a string';
	else {
		const checkString = string
			.split('')
			.every(
				c =>
					c.charCodeAt() === 32 ||
					(c.charCodeAt() > 64 && c.charCodeAt() < 91) ||
					(c.charCodeAt() > 96 && c.charCodeAt() < 123)
			);
		if (!checkString) return 'Not letters';
	}

	let regex = /^[a-zA-Z]|(?<=\s)[a-zA-Z]/g;

	return string
		.match(regex)
		.map(c => c.replace(c, c.toUpperCase()))
		.join('');
};

// SHortes solution
// var makeAcronym = function(string) {
//   if(typeof string !== 'string') return 'Not a string';
//   if(/\d/.test(string)) return 'Not letters';
//   return string
//       .split(' ')
//       .map(function(word) { return word[0] })
//       .join('')
//       .toUpperCase()
// };
console.log(makeAcronym('OdexTZzYgYyRfOpIQWwcMmwmqYXq G'));
