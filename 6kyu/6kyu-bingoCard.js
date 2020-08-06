// 6 kyu  - Bingo Card

// After yet another dispute on their game the Bingo Association decides to change course and automize the game.

// Can you help the association by writing a method to create a random Bingo card?

// Task:

// Finish method:
// getCard()
// A Bingo card contains 24 unique and random numbers according to this scheme:
// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75

// The card must be returned as an array of Bingo style numbers:
// { 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

// function getCard() {
//   let card = newComb()
//   while(hasDuplicate(card)){
//     card = getCard()
//   }
//   return card
// }

function getNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function newComb(){
//   let card = []
//   for(let i = 0; i < 5; i++){
//     card.push('B' + getNum(1,15))
//   }
//   for(let i = 0; i < 5; i++){
//     card.push('I' + getNum(16, 30))
//   }
//   for(let i = 0; i < 4; i++){
//     card.push('N' + getNum(31, 45))
//   }
//   for(let i = 0; i < 5; i++){
//     card.push('G' + getNum(46, 60))
//   }
//   for(let i = 0; i < 5; i++){
//     card.push('O' + getNum(61, 75))
//   }
//   return card
// }

// function hasDuplicate(arr){
//   const set = [...new Set(arr)]
//   return set.length !== arr.length
// }

function genColumn(arr, letter, min, max, count) {
  let c = [];
  for (let i = 0; i < count; ) {
    let num = getNum(min, max);
    if (!c.includes(num)) {
      c.push(num);
      arr.push(letter + num);
      i++;
    }
  }
  return arr;
}

function getCard() {
  let arr = [];
  genColumn(arr, 'B', 1, 15, 5);
  genColumn(arr, 'I', 16, 30, 5);
  genColumn(arr, 'N', 31, 45, 4);
  genColumn(arr, 'G', 46, 60, 4);
  genColumn(arr, 'O', 61, 75, 4);

  return arr;
}

console.log(getCard());
