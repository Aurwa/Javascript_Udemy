'use strict';

/*
// const a = 'Jonas';
// first();

// function first() {
//   const b = 'Hello';
//   second();

//   function second() {
//     const c = 'Hi';
//     third();
//   }
// }

// function third() {}
*/

// ******* SCOPE CHAIN *********
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} years old born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh! You're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 2));
    }
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// ******** Hoisting ********
/*
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products are deleted.');
}
*/

//  ****** This Keyword ******

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
