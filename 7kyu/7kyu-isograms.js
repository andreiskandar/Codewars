// 7 kyu - Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// function isIsogram(s) {
//   const str = [...new Set(s.toLowerCase())];
//   return str.length === s.length;
// }

// using regex
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

console.log(isIsogram('mooSe'));
