function bouncingBall(h,  bounce,  window) {
  // your code here
  var numberOfBounce = 0;
  const condition = h > 0 && (bounce > 0 && bounce < 1) && window < h;
  if (condition) {
    for(let i = h; i > window; i * bounce) {
      ++numberOfBounce;
    }
    return numberOfBounce;
  }
  return -1;
}

console.log(bouncingBall(3, 0.66, 1.5));
