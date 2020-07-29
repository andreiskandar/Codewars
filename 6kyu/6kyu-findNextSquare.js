function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if(Number.isInteger(sq)) {
    var sqrtN = Math.sqrt(sq) % 2;//?
    if (sqrtN === Math.round(Math.sqrt(sq))) {
      sqrtN = sqrtN + 1;//?
      return Math.pow(sqrtN, 2);//?
    }
  }
  return -1;
}

console.log(findNextSquare(108));