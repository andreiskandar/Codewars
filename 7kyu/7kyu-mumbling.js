// 7kyu - Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return [...s.toLowerCase()]
    .map((c, i) => {
      let rep = i + 1;
      let str = '';
      for (let i = 0; i < rep; i++) {
        str += c;
      }
      return str[0].toUpperCase() + str.slice(1);
    })
    .join('-');

  //short solution

  // return [...s]
  //   .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
  //   .join('-');
}

console.log(
  accum('ZpglnRxqenU'),
  'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
);
