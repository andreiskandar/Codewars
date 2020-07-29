/*
5 - Double Cola
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
*/

function whoIsNext(names, r) {
  // index is 1-based, arrays are 0-based
  r = r - 1;

  while (r >= names.length) {
    r = Math.floor((r - names.length) / 2);
  }
  return names[r];
}

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

console.log(
  whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 7230702951)
);

let names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];
console.log(whoIsNext(names, 1));
