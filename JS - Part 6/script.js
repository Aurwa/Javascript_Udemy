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

// let str = ["apple", "banana"];
// function concat(arr) {
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }

// console.log(concat(str));

function oddOrEven(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong request");
  }
}

let func = oddOrEven("even");
// console.log(func);

// return array elements larger than a number

// let arr = [5, 3, 2, 6, 7, 1, 9];
// let newArr = [];

// function largerNum(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(largerNum(arr, 3));

// extract unique characters from a string
// let str = "abcdabcdefgggh";
// let newStr = "";

// function uniqueChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === i) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(uniqueChar(str));

// longest country name

// let countries = ["Australia", "Germany", "United States of America"];

// function longestCountry(arr) {
//   let country = arr[0];

//   for (let i = 0; i < countries.length; i++) {
//     if (arr[i].length > country.length) {
//       country = arr[i];
//     }
//   }
//   return country;
// }

// console.log(longestCountry(countries));

// count vowels in a string

// let str = "abcdisifevenumbrella";
// let count = 0;

// function countVowels(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countVowels(str));

// generate random number within range

function randomNum(start, end) {
  let diff = end - start;
  let rand = Math.floor(Math.random() * diff) + start;
  return rand;
}

console.log(randomNum(5, 10));
