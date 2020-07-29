// 7kyu - Building Blocks
// Write a class Block that creates a block (Duh..)

// ##Requirements

// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`

class Block {
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getLength() {
    return this.length;
  }
  getVolume() {
    return this.length * this.width * this.height;
  }

  getSurfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.length * this.height)
    );
  }
}
//Short Solution
// class Block {
//   constructor(data){
//     [this.w, this.l, this.h] = data;
//   }
//   getWidth(){ return this.w }
//   getLength(){ return this.l }
//   getHeight(){ return this.h }
//   getVolume(){
//     let {l, w, h} = this;
//     return w*l*h;
//   }
//   getSurfaceArea(){
//     let {l, w, h} = this;
//     return 2 * (l*w + l*h + w*h);
//   }
// }

let block = new Block([2, 4, 6]);

console.log(block.getWidth(), 2);
console.log(block.getLength(), 4);
console.log(block.getHeight(), 6);
console.log(block.getVolume(), 48);
console.log(block.getSurfaceArea(), 88);
