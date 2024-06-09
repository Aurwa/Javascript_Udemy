'use strict';

/*
const Person = function (username, birthYear) {
  this.username = username;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
  //this keyword is set to the object that is calling the method
};

//jonas.calcAge();

// The prototype of Jonas is Person.prototype
// console.log(Person.prototype);
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'homo sapien';
// console.log(jonas.species);
// console.log(Object.prototype.isPrototypeOf(Person.prototype));
// console.log(Object.prototype.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__ === Array.prototype);
*/

/*
const Person = function (username, birthYear) {
  this.username = username;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
//console.log(jonas);

//console.log(jonas instanceof Person);
//console.log(jonas.__proto__ === Person.prototype);

// Coding Challenge One //

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  // this.accelerate = function () {
  //   console.log(this.speed + 10);
  // };

  // this.brake = function () {
  //   console.log(this.speed - 5);
  // };
};

const car1 = new Car('BMW', 120);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
car1.accelerate();
car1.accelerate();

car1.brake();
*/

// Classes in JS

// class expression
//const PersonCl = class {

//}

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const jessica = new PersonCl('jessica', 1996);
jessica.calcAge();
