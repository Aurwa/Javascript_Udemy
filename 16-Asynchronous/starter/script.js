'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData(country) {
  const request = fetch(
    // 'https://restcountries.com/v3.1/all?fields=name,population'
    `https://restcountries.com/v2.1/name/${country}`
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(err => {
      console.log(`${err}`);
    });
}

// getCountryData('canada');

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log('Async task is complete!');
    resolve();
  }, 2000);
});

promiseOne.then(() => {
  // console.log('Promise consumed.');
});

// console.log('Hello World');

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: 'Chai', city: 'Lahore' });
//     } else {
//       reject('ERROR');
//     }
//   }, 3000);
// });

// promiseThree
//   .then(user => {
//     return user.username;
//   })
//   .then(name => {
//     // console.log(name);
// });

// const promiseFour = new Promise(function (reject, resolve) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: 'Javascript', password: '123' });
//     } else {
//       reject('ERROR!!!');
//     }
//   }, 2000);
// });

// async function consumePromiseFour() {
//   try {
//     const response = await promiseFour;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFour();

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://randomuser.me/api/');
//     const data = await response.json();
//     console.log(data);
//     console.log(data.results[0].name);
//   } catch (error) {
//     console.log('Error ', error);
//   }
// }

// getAllUsers();

// console.log('Hello World');

// const getUsers = new Promise(function (resolve, reject) {
//   fetch('https://randomuser.me/api/')
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error('Network response was not okay.');
//       } else {
//         return response.json();
//       }
//     })
//     .then(function (data) {
//       resolve(data);
//     })
//     .catch(function (error) {
//       reject(error);
//     });
// });

// getUsers
//   .then(function (data) {
//     console.log(data.results);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function users() {
//   fetch('https://randomuser.me/api/')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// users();

//  fetch('https://randomuser.me/api/')

//=======================================
// creating promise
// ======================================

// const getUsers = new Promise(function (resolve, reject) {
//   fetch('https://randomuser.me/api/')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       resolve(data);
//     })
//     .catch(function (error) {
//       reject('Errrrorrr!!!');
//     });
// });

// getUsers
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//=======================================
// consuming promise
// ======================================

// const users = function () {
//   fetch('https://randomuser.me/api/')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// users();

//=======================================
// async await
// ======================================

// async function getUsers() {
//   try {
//     const response = await fetch('https://randomuser.me/api/');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUsers();

// console.log('Test start');

// setTimeout(() => {
//   console.log('0 sec setTimeout');
// }, 0);

// Promise.resolve('This is a promise').then(function (response) {
//   console.log(response);
// });

// console.log('Test end');

// let randNum = Math.random();

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening!');
//   setTimeout(() => {
//     if (randNum >= 0.5) {
//       console.log(randNum);
//       resolve('Won lottery');
//     } else {
//       console.log(randNum);
//       reject(new Error('Lost lottery'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   });

const timer = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

timer(1)
  .then(() => {
    console.log('After 1 sec');
    return timer(2);
  })
  .then(() => {
    console.log('After 2 sec');
  });
