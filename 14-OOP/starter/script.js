'use strict';

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
