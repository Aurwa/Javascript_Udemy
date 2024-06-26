'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
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

// const timer = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// timer(1)
//   .then(() => {
//     console.log('After 1 sec');
//     return timer(2);
//   })
//   .then(() => {
//     console.log('After 2 sec');
//   });

// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   alert(err);
// }

*/

// yt example promise

/*
let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

let order = function (time, work) {
  return new Promise(function (resolve, reject) {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Our shop is closed.'));
    }
  });
};

order(1000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log('Production has started.'));
  })

  .then(() => {
    return order(2000, () => console.log('The fruit was chopped'));
  });
*/

// yt example async / await

/*
let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Which toppings would like?'));
    }, 3000);
  });
};

async function kitchen() {
  console.log('A');
  console.log('B');

  await toppings_choice();

  console.log('C');
  console.log('D');
}

kitchen();
console.log('Other tasks');
console.log('Other orders');
*/

/*

let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

const select_toppings = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Which toppings do you want?');
  }, 2000);
});

select_toppings.then(res => {
  console.log(res);
});

// async function kitchen() {
//   console.log('A');
//   console.log('B');
//   await select_toppings();
//   console.log('C');
//   console.log('D');
// }

// kitchen();

/*
const lotteryPromise = new Promise((resolve, reject) => {
  const randNum = Math.random();
  console.log('Buy lottery ticket');
  setTimeout(() => {
    if (randNum >= 0.5) {
      resolve('You won the lottery.');
    } else {
      reject('You lost the lottery.');
    }
  }, 2000);
});

lotteryPromise
  .then(response => {
    console.log(response);
  })

  .catch(err => {
    console.log(err);
  });
*/

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data received');
//       reject('Data not received');
//     }, 2000);
//   });
// }

// fetchData()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// function task1() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Task 1 completed');
//     }, 1000);
//   });
// }

// function task2(resultFromTask1) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Task 2 completed');
//     }, 2000);
//   });
// }

// task1()
//   .then(res => {
//     console.log(res);
//     return task2(res);
//   })
//   .then(res => {
//     console.log(res);
//   });

// function rejectPromises() {
//   return new Promise(function (resolve, reject) {
//     let playgame = false;
//     if (playgame) {
//       resolve('User playing game');
//     } else {
//       reject('No one is playing game');
//     }
//   });
// }

// rejectPromises()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data received');
//     }, 2000);
//   });
// }

// fetchData().then(result => {
//   console.log(result);
// });

// Way 1
// async function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data received.');
//     }, 2000);
//   });
// }

// async function displayData() {
//   const res = await fetchData();
//   console.log(res);
// }

// displayData();

// Way 2
// async function fetchData() {
//   const res = await new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data received.');
//     }, 2000);
//   });
//   console.log(res);
// }

// fetchData();

// async function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data received!!');
//     }, 1000);
//   });
// }

// async function displayData() {
//   const res = await fetchData();
//   console.log(res);
// }

// displayData();

//////////////////////////////////////

// async function firstTask() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('First task done');
//       resolve('First task result');
//     }, 1000);
//   });
// }

// async function secondTask(resultFromFirstTask) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Second task done, received:', resultFromFirstTask);
//       resolve('Second task result');
//     }, 1000);
//   });
// }

// async function runTasks() {
//   const firstResult = await firstTask();
//   const secondResult = await secondTask(firstResult);
//   console.log(secondResult);
// }

//runTasks();

// function firstTask() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('First task done');
//       resolve('First task result');
//     }, 1000);
//   });
// }

// function secondTask(receivedFromFirst) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Second task done. Received ', receivedFromFirst);
//       resolve('Second task result');
//     }, 1000);
//   });
// }

// firstTask()
//   .then(res => {
//     return secondTask(res);
//   })
//   .then(res => {
//     console.log(res);
//   });

//************************************************************************************** */

// function task1() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('First task data.');
//       resolve('First task done');
//     }, 1000);
//   });
// }

// function task2(resFromOne) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Second task, ', resFromOne);
//       resolve('Second task done');
//     }, 2000);
//   });
// }

// task1()
//   .then(res => {
//     return task2(res);
//   })
//   .then(res => {
//     console.log(res);
//   });

// **************************************************************************************//

// async function task1() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('First task data.');
//       resolve('First task done');
//     }, 1000);
//   });
// }

// async function task2(resFromOne) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Second task, ', resFromOne);
//       resolve('Second task done');
//     }, 2000);
//   });
// }

// async function tasks() {
//   const firstTask = await task1();
//   const secondTask = await task2(firstTask);
//   console.log(secondTask);
// }

// tasks();

// async function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data received');
//     }, 2000);
//   });
// }

// async function printData() {
//   const res = await fetchData();
//   console.log(res);
// }

// printData();

// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data received!!!');
//     }, 2000);
//   });
// }

// fetchData().then(res => {
//   console.log(res);
// });

// console.log('Program started');

// console.log('Program in progress...');

// const newPromise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Program complete');
//   }, 3000);
// });

// newPromise.then(res => {
//   console.log(res);
// });

// Question 1
/*
fetch('https://randomuser.me/api/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      return response.json();
    }
  })
  .then(data => {
    console.log(data.results[0].name.first);
  })
  .catch(err => {
    console.log(err);
  });
*/

// Question 2

/*
//https://jsonplaceholder.typicode.com/users/{userId}

//https://jsonplaceholder.typicode.com/posts?userId={userId}

// userData

async function getUserDetails(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch user details');
  } else {
    const userDetails = await response.json();
    return userDetails;
  }
}

async function getUserPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch user details');
  } else {
    const userPosts = await response.json();
    return userPosts;
  }
}

async function getUserData(userId) {
  try {
    const userDetails = await getUserDetails(userId);
    console.log(userDetails);

    const userPosts = await getUserPosts(userId);
    console.log(userPosts);
  } catch (error) {
    console.error('Error:', error);
  }
}

let userId = 2;
getUserData(userId);

// .then(response => {
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// });
*/

// const randomPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('Hello World!');
//     } else {
//       reject('Error Occured.');
//     }
//   }, 1000);
// });

// randomPromise
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

function inputNum(num) {
  return new Promise(resolve => {
    resolve(num);
  });
}

function doubleNum(num) {
  return new Promise(resolve => {
    resolve(num + num);
  });
}

function increaseByTen(num) {
  return new Promise(resolve => {
    resolve(num + 10);
  });
}

function multiplyByThree(num) {
  return new Promise(resolve => {
    resolve(num * 3);
  });
}

// inputNum(3)
//   .then(res => {
//     return doubleNum(res);
//   })
//   .then(res => {
//     return increaseByTen(res);
//   })
//   .then(res => {
//     return multiplyByThree(res);
//   })
//   .then(res => {
//     console.log(res);
//   });

inputNum(3)
  .then(doubleNum)
  .then(increaseByTen)
  .then(multiplyByThree)
  .then(res => {
    console.log(res);
  });

const arr = [1, 2, 3, 4, 'grocery list', 'todo'];
console.log(arr);
