function comp(arr1, arr2) {
  arr1.sort((a,b) => a - b); arr2.sort((a,b) => a - b);
  return arr1.every((el,i) => Math.pow(el,2) == arr2[i]); 
}


a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));