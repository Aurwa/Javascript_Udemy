'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//=======================================
// ======= function =======
function createUser(accs) {
  // console.log(accs);
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word[0];
      })
      .join('');
  });
}

createUser(accounts);
// console.log(accounts);

//====================================
// ======= function ========
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcPrintBalance = function (movements) {
  const balance = movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  labelBalance.textContent = `${balance}€`;
};

calcPrintBalance(account1.movements);

//======================================
// ========= function ==========

// const calcDisplaySumm

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1));

// creating a shallow copy
// console.log(arr.slice());
// console.log([...arr]);
// console.log(arr.splice(1, 3));
// console.log(arr.splice(-1));

// const arr2 = [6, 7, 8];
// for (const num of arr2) {
//   console.log(num);
// }

// const res = arr.forEach(e => {
//   console.log(e + 1);
//   return e + 1;
// });

// console.log(res);

// const res = arr.concat(arr2);
// console.log(res);
// console.log(res.join(' '));
// console.log(arr2.includes(8));
// console.log(arr.at(-1));
// console.log(arr.at(0));
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i} : Deposited money`);
//   } else {
//     console.log(`${i} : Withdrew money`);
//   }
// }

// movements.forEach((movement, i) => {
//   if (movement > 0) {
//     console.log(`${i} : Deposited money`);
//   } else {
//     console.log(`${i} : Withdrew money`);
//   }
// });
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const updatedMov = movements.map(mov => {
  return Math.floor(mov * eurToUsd);
});

// console.log(updatedMov);

const movementDescp = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `${i + 1} : Deposited money`;
  } else {
    return `${i + 1} : Withdrew money`;
  }
});

// console.log(movementDescp);

const deposits = movements.filter(mov => {
  return mov > 0;
});

// console.log(deposits);

const withdrawals = movements.filter(mov => {
  return mov < 0;
});

// console.log(withdrawals);

// function createUsername(user) {
//   const username1 = user
//     .toLocaleLowerCase()
//     .split(' ')
//     .map(function (letter) {
//       return letter[0];
//     })
//     .join('');

//   return username1;
// }

// console.log(createUsername('Steven Thomas Williams'));
function createUsername(user) {
  // console.log(user);
  user.forEach(function (accountsUser) {
    accountsUser.username1 = accountsUser.owner
      .toLowerCase()
      .split(' ')
      .map(function (letter) {
        return letter[0];
      })
      .join('');
  });
}

createUsername(accounts);
// console.log(accounts);

// function createUser(accs) {
//   // console.log(accs);
//   accs.forEach(acc => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(word => {
//         return word[0];
//       })
//       .join('');
//   });
// }

// console.log(accounts);
// console.log(movements);
const balance = movements.reduce((acc, cur) => {
  return acc + cur;
}, 0);
// console.log(balance);
// console.log('=========================');

let sum = 0;
for (const mov of movements) {
  sum += mov;
}
// console.log(sum);
// console.log(movements);
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

// console.log(max);

const euroToUsd = 1.1;
const res = movements
  .filter(mov => {
    return mov > 0;
  })
  .map(mov => {
    return Math.floor(mov * euroToUsd);
  })
  .reduce((acc, mov) => {
    return acc + mov;
  }, 0);
// console.log(res);

const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

const accIndex = accounts.findIndex(acc => acc.owner === 'Jessica Davis');
// console.log(accounts);
// console.log(accIndex);

// const anyDeposits = movements.some(acc => acc > 0);
// console.log(anyDeposits);

function anyDeposits(acc) {
  return acc > 5000;
}

// console.log(movements.some(anyDeposits));

// console.log(account4.movements.every(mov => mov > 0));

const arra = [[1, 2, 3], 5, 6, [7, 8, 9]];
const flatArray = [].concat(...arra);
// console.log(flatArray);
// console.log(arra.flat(Infinity));

const words = ['apple', 'strawberry', 'grapes', 'oranges'];
// console.log(words.sort());

const numbers = [300, 5, 1, 2000];
const sortFunc = function (a, b) {
  if (a > b) {
    //positive value if the first argument is greater than the second (to sort a after b)
    return 1;
  } else if (a < b) {
    // negative value if the first argument is less than the second (to sort a before b)
    return -1;
  }
};

// console.log(numbers.sort(sortFunc));

let newArr = new Array(7);
newArr.fill(1);
// console.log(newArr);

const y = Array.from({ length: 5 }, (curr, i) => {
  return i + 1;
});
// console.log(y);

const diceRolls = Array.from({ length: 15 }, (_, i) => {
  return Math.floor(Math.random() * 6 + 1);
});

// console.log(diceRolls);
