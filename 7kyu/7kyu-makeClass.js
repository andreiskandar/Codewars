/*
7kyu - Make Class
I don't like writing classes like this:

function Animal(name,species,age,health,weight,color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}
Give me the power to create a similar class like this:

const Animal = makeClass("name","species","age","health","weight","color") 
*/
// let makeClass = (...properties) => {
//   return function (...args) {
//     properties.forEach((n, i) => (this[n] = args[i]));
//   };
// };

function makeClass(...properties) {
  return class {
    constructor(...props) {
      properties.forEach((prop, index) => {
        this[prop] = props[index];
      });
    }
  };
}
