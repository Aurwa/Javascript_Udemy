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

// ****** Classes in JS ********
/*
// class expression
//const PersonCl = class {

//}


// Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get greet() {
    return `Hello ${this.firstName}`;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
//jessica.calcAge();
*/

// ***** ES6 Classes part 2 ******
/*

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
const walter = new PersonCl('Walter', 1990);
console.log(jessica);
*/

// ******* CODING CHALLENGE 2 ********/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // Speed in km/h
  }

  // Converts speed from mph to km/h
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  // Converts speed from km/h to mph
  get speedUS() {
    return this.speed / 1.6;
  }
}

const car1 = new CarCl('Ford', 120);
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1);

// console.log(car1.speed);
// console.log(car1.speedUS);
*/

/*
// ********* Getters & Setters **********

const account = {
  owner: 'Jonas',
  movements: [200, 530, 100, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

*/

// ********** Object.create ***********
/*
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven.__proto__ === PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2006;
steven.init('Steven', 1998);
steven.calcAge();

const sarah = Object.create(PersonProto);
*/

// ********** INHERITANCE BETWEEN CLASSES USING CONSTRUCTOR FUNCTION *********

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  //Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.calcAge();
*/

// ****** Inheritance between ES6 Classes****

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get greet() {
    return `Hello ${this.firstName}`;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hey. This is ${this._fullName}`);
  }
}

const jessica = new StudentCl('Jessica Davis', 1996, 'Bioinformtics');
jessica.introduce();
*/

// ***** Inheritance btwn classess object.create ******

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
