/* 6kyu - Apply offset to subtitles

You are given a line from a movie subtitle file as a string.
The line consists of time interval when the text is shown:

start(hh:mm:ss,ms) --> stop(hh:mm:ss,ms)

and the text itself, for example:

01:09:02,684 --> 01:09:03,601 Run Forrest, run!

Your task is to write a function subs_offset_apply which takes such string and offset
(integer) in miliseconds as arguments, and returns the string with the offset applied.
Examples:

string = "01:09:02,684 --> 01:09:03,601 Run Forrest, run!"  
subs_offset_apply(string, 3663655)
output: "02:10:06,339 --> 02:10:07,256 Run Forrest, run!"

"00:43:22,074 --> 00:43:24,159 No, I am your father."
subs_offset_apply(string, 1789)   
output: "00:43:23,863 --> 00:43:25,948 No, I am your father." 

"00:03:06,241 --> 00:03:07,618 I'll be back."
subs_offset_apply(string, -21789) 
output: "00:02:44,452 --> 00:02:45,829 I'll be back."
Time constraints:

00:00:00,000 <= t <= 99:59:59,999

In case of too big negative or positive offset, which results in exceeding the constraints,
the function should return a string "Invalid offset".
You'll be given only valid strings.
Have Fun!
*/

function subsOffsetApply(str, offset) {
  const startString = str.slice(0, 12);
  const endString = str.slice(17, 29);

  const start = timeOffset(startString, offset);
  const end = timeOffset(endString, offset);

  function timeOffset(str, offset) {
    h = +str.slice(0, 2) * 36e5;
    m = +str.slice(3, 5) * 6e4;
    s = +str.slice(6, 8) * 1e3;
    ms = +str.slice(9);
    return h + m + s + ms + offset;
  }

  if (start < 0 || end > 359999999) {
    return 'Invalid offset';
  }

  let readableTime = string => {
    h = Math.floor(string / 36e5);
    m = Math.floor((string % 36e5) / 6e4);
    s = Math.floor(((string % 36e5) % 6e4) / 1000);
    ms = Math.floor(((string % 36e5) % 6e4) % 1000);

    if (ms === 0) {
      ms = '000';
    }
    return `${toStr(h)}:${toStr(m)}:${toStr(s)},${pad(ms, 3)}`;
  };
  let pad = (n, d) => ('0'.repeat(d - 1) + (n | 0)).slice(-d);
  let toStr = num => (num < 10 ? '0' + num : num);

  return `${readableTime(start)} --> ${readableTime(end)}${str.slice(29)}`;
}
console.log(
  subsOffsetApply('01:45:33,974 --> 01:45:39,647 Mr Anderson.', -3587931)
);
