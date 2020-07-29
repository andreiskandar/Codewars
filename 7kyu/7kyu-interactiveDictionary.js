// 7kyu - Interactive Dictionary
// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana

class Dictionary {
  constructor(key, value) {
    // your code
    this.dict = {};
  }

  newEntry(key, value) {
    this.dict[key] = value;
  }

  look(key) {
    return this.dict.hasOwnProperty(key)
      ? this.dict[key]
      : `Can\'t find entry for ${key}`;
  }
}
let d = new Dictionary();

d.newEntry('A', 'AAA');
d.newEntry('cmzdrnuldh', 'nlcyemnljphkbjk');
d.newEntry('sfdsf', '2303928');
console.log(d);
console.log(d.look('324832'));
