// console.log("Hi there");

// setTimeout(() => {
//   console.log("Apna College");
// }, 2000);

// console.log("Welcome to");

const student = {
  name: "Aurwa",

  getInfo1: function () {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },

  getInfo2: function () {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },

  printName: function () {
    console.log(this);

    console.log(this.name);
  },
};

// student.getInfo2();
// student.printName();

const square = (n) => {
  return n * n;
};

// console.log(square(5));

let arr = [10, 2, 3];

let average = (arr) => {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
};

// console.log(average(arr));

let evenOrOdd = (num) => {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

// console.log(evenOrOdd(10));

let length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    this.callbackMethod = callback;
    this.callbackMethod();
  },
};

object.method(callback);

// const object = {
//   message: "Hello World",

//   logMessage: function () {
//     console.log(this);

//     console.log(this.message);
//   },
// };

// setTimeout(object.logMessage, 1000);
