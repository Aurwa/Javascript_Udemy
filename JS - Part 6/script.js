function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}

// rollDice();
// rollDice();
// rollDice();

function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

// table(2);

let res = 0;
function sum(n) {
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
}

// console.log(sum(6));

let str = ["apple", "banana"];
function concat(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

// console.log(concat(str));

let greet = "hello";

function changGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
}
console.log(greet);
changGreet();
