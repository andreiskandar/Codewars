function getCount(str) {
  var vowelsCount = 0;
  var regex = /[aeiou]+/g;
  // enter your majic here
 
  return str.match(regex) == null ? 0 : str.match(regex).join("").length; 

getCount('my pyx');