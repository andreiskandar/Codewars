function bouncingBall(h,  bounce,  window) {
  // your code here
  var numberOfBounce = 0;
  const condition = h > 0 && (bounce > 0 && bounce < 1) && window < h;
  if (condition) {
    //if(h > window) numberOfBounce++;
      while(h > window){
        numberOfBounce++;
        h *= bounce;
      }
    return numberOfBounce;
  }
  return -1;
}

console.log(bouncingBall(3, 0.66, 1.5));
console.log(bouncingBall(2, 0.5, 1));
console.log(bouncingBall(30, 0.66, 1.5));