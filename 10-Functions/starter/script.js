'use strict';

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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transfomed sting: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);
