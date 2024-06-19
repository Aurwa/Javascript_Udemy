'use strict';

/*

// const bookingArr = [];
// const createBooking = function flight(
//   flightNum,
//   numPassengers = 10,
//   price = 1000
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookingArr.push(booking);
// };

// createBooking('LH123');

// ==========================================

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas',
//   passport: 2345678,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH555';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2345678) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// const newPassport = function (person) {
//   person.passport = Math.floor(Math.random() * 10000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// console.log(flight);
// console.log(jonas);

// ========================================

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transfomed sting: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);

// transformer('Javascript is the best!', oneWord);

// ==========================================

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const returnFunc = greet('Hey');
// returnFunc('Steven');

// greet('Hello')('Jonas');

// ========================================
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode} ${flightNum}`,
//       name,
//     });
//   },
// };

// lufthansa.book(239, 'Jon Smith');
// lufthansa.book(111, 'Tom Holland');
// //console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   airline: 'Eurowings',
//   bookings: [],
// };

// const book = lufthansa.book;
// book.call(eurowings, 23, 'Sarah Williams');

// function greet() {
//   console.log(this.name);
//   console.log(`Meet ${this.name}, your new ${this.age} years old friend!`);
// }

// const person = {
//   name: 'Ali',
//   age: 16,
// };

// greet.call(person);

// function setUsername(username) {
//   this.username = username;
// }

// function createUser(username, email, password) {
//   setUsername.call(this, username);
//this.username = username;
//   this.email = email;
//   this.password = password;
// }

// const user = new createUser('Ali', 'ali@google.com', '123');
// const user = new createUser('Ali', 'ali@google.com', '123');
// console.log(user);

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookingsArr: [],

//   book: function (name, flightNum) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );

//     this.bookingsArr.push({
//       flight: `${this.iataCode} ${flightNum}`,
//       name,
//     });
//   },
// };

// lufthansa.book('John Sims', 199);
// console.log(lufthansa.bookingsArr);

// const bookFunc = lufthansa.book;
// console.log(bookFunc);

// const emirates = {
//   airline: 'Emirates',
//   iataCode: 'EM',
//   bookingsArr: [],
// };

// bookFunc.call(emirates, 'Katy Perry', 999);

// const setUsername = function (username) {
//   this.username = username;
// };

// const createUser = function (username, email) {
//   setUsername.call(this, username);
//   this.email = email;
// };

// const user = new createUser('Williams', 'williams@google.com');
// console.log(user);

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

// lufthansa.book(239, 'Jon Smith');
// lufthansa.book(111, 'Tom Holland');
//console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  airline: 'Eurowings',
  bookings: [],
};

const book = lufthansa.book;
// book.call(eurowings, 23, 'Sarah Williams');

// const bookEw = book.bind(eurowings);
// bookEw(100, 'Aurwa');

// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

*/

const bookingArr = [];

const createBooking = function (flightNum, numPassengers = 3, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookingArr.push(booking);
  console.log(booking);
};

createBooking('LH123', undefined, 200);
