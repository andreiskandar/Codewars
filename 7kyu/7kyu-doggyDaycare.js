// 7 kyu  - Doggy Daycare

// The owner of the doggy daycare wants to know whether she can accept new dogs into her daycare and needs to check whether they have been wormed and vaccinated in order to accept them either by themselves or as well as other dogs.

// There is a Dog prototype (class in Ruby) that needs to be extended with the method checkDog (check_dog). Dog currently has the following properties (attributes):

// name
// age
// breed
// vaccinated
// wormed
// You'll need to return the dog's name each time as well as " can be accepted", " can only be accepted by itself" and " can not be accepted".

// If the dog is vaccinated and wormed, the dog can be accepted.
// If the dog is only vaccinated or only wormed, the dog can only be accepted by itself.
// If the dog has not be vaccianted or wormed, the dog can not be accepted.
// Example:

// var spot = new Dog("Spot", 5, "Labrador", true, false);
// spot.checkDog(); // Should return: "Spot can only be accepted by itself".

// class Dog{
//   constructor(name, age, breed, vaccinated, wormed){
//     this.name = name
//     this.age = age
//     this.breed = breed
//     this.vaccinated = vaccinated
//     this.wormed = wormed
//   }
// }

Dog.prototype.checkDog = function () {
  const accept = 'can be accepted';
  const acceptByItself = 'can only be accepted by itself';
  const cannotAccept = 'can not be accepted';

  if (this.vaccinated && this.wormed) {
    return `${this.name} ${accept}`;
  } else if (this.vaccinated || this.wormed) {
    return `${this.name} ${acceptByItself}`;
  } else return `${this.name} ${cannotAccept}`;
};

let spot = new Dog('Spot', 4, 'Labrador', true, false);
console.log(spot.checkDog());
