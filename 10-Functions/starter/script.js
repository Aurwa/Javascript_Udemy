'use strict';

const bookingArr = [];
const createBooking = function flight(
  flightNum,
  numPassengers = 10,
  price = 1000
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingArr.push(booking);
};

createBooking('LH123');
