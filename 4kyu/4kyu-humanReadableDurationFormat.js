/*
Human readable duration format
Your task in order to complete this Kata is to write a function which formats a duration, 
given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". 
Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
*/

function formatDuration(seconds) {
  let output = [];
  let num = 0;
  for (let i = 0; i < duration.length; i++) {
    num = Math.floor(seconds / length[i]);
    if (num > 0) {
      output.push(
        `${(num += num > 1 ? ' ' + duration[i] + 's ' : ' ' + duration[i])}`
      );
      // output.push(`${num} ${num === 1 ? duration[i] : durationPlural[i]}`);
      seconds %= length[i];
    }
  }
  console.log(output);

  return output.length > 1
    ? output.join(', ').replace(/,([^,]*)$/, ' and' + '$1')
    : output[0];
  // let outputStr = '';
  // const outputLen = output.length;
  // for(let i = 0; i < outputLen; i++){
  //   if(i >= outputLen - 2 && i !== outputLen - 1) outputStr += `${output[i]} and `;
  //   else if(i < outputLen - 2) outputStr += `${output[i]}, `;
  //   else outputStr += `${output[i]}`
  // }

  // return outputStr;
}
const duration = ['year', 'day', 'hour', 'minute', 'second'];
const durationPlural = ['years', 'days', 'hours', 'minutes', 'seconds'];
const length = [31536000, 86400, 3600, 60, 1];

console.log(formatDuration(67));

// function formatDuration(seconds){
//   let output = {};
//   let final = '';
//   let num = 0;
//   while(seconds && !num){
//     for(let i = 0; i < duration.length; i++){
//       num = Math.floor(seconds / length[i]);
//       output[duration[i]] =num
//       seconds %= length[i];
//     }
//   }
//   let [...keys] = Object.keys(output)
//   console.log(keys);

//   for(let i = 0; i < keys.length; i++){
//     console.log(output.keys[i]);
//   }
//   return output;
// }
