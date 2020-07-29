/*
6kyu - Reversing a Process
https://www.codewars.com/kata/5dad6e5264e25a001918a1fc/train/javascript

Suppose we know the process by which a string s was encoded to a string r (see explanation below). The aim of the kata is to decode this string r to get back the original string s.

Explanation of the encoding process:
input: a string s composed of lowercase letters from "a" to "z", and a positive integer num
we know there is a correspondence between abcde...uvwxyzand 0, 1, 2 ..., 23, 24, 25 : 0 <-> a, 1 <-> b ...
if c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num * x % 26, then find ch the corresponding character of f(x)
Accumulate all these ch in a string r
concatenate num and r and return the result
For example:

encode("mer", 6015)  -->  "6015ekx"

m --> 12,   12 * 6015 % 26 = 4,    4  --> e
e --> 4,     4 * 6015 % 26 = 10,   10 --> k
r --> 17,   17 * 6015 % 26 = 23,   23 --> x

So we get "ekx", hence the output is "6015ekx"
Task
A string s was encoded to string r by the above process. complete the function to get back s whenever it is possible.

Indeed it can happen that the decoding is impossible for strings composed of whatever letters from "a" to "z" when positive integer num has not been correctly chosen. In that case return "Impossible to decode".

Examples
decode "6015ekx" -> "mer"
decode "5057aan" -> "Impossible to decode"
*/

const charDict = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
  10: 'k',
  11: 'l',
  12: 'm',
  13: 'n',
  14: 'o',
  15: 'p',
  16: 'q',
  17: 'r',
  18: 's',
  19: 't',
  20: 'u',
  21: 'v',
  22: 'w',
  23: 'x',
  24: 'y',
  25: 'z'
};
function decode(r) {
  const num = parseInt(r.match(/[\d]+/g));
  const string = r.match(/[a-z]/g);
  let final = '';
  for (let c of string) {
    let output = '';
    for (let i = 0; i < 26; i++) {
      if ((i * num) % 26 === parseInt(convertToNum(charDict, c))) {
        if (output !== '') {
          return 'Impossible to decode';
        } else {
          output = i;
          final += convertToLetter(charDict, i);
        }
      }
    }
  }
  return final;
}

function convertToNum(objectDict, char) {
  return Object.keys(objectDict).find(key => objectDict[key] === char);
}
function convertToLetter(objectDict, num) {
  return objectDict[num];
}

console.log(decode('1273409kuqhkoynvvknsdwljantzkpnmfgf'));
console.log(decode('1273409uogbucwnddunktsjfanzlurnyxmx'));
console.log(decode('5057aan'));
