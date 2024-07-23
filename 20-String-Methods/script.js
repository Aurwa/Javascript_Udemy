// indexOf + lastIndexOf
/*
let str = "Aurwa Zafarr";
console.log(str.lastIndexOf("a", 8));
console.log(str.indexOf("a", 6));
console.log(str.indexOf("a", 5));
console.log(str.charAt(2));
console.log(str.lastIndexOf("a", -6));

let str2 = "the code undefined code code !";
console.log(str2.lastIndexOf("code", -10));
console.log(str2.indexOf("code", -15));
console.log(str2.length);
*/

// slice + substring
/*
let str = "The morning is upon us";
// console.log(str.slice(12));
// console.log(str.substring(12));

// console.log(str.slice(-11));
// console.log(str.substring(-11));

// console.log(str.slice(12, 16));
// console.log(str.substring(12, 16));

console.log(str.slice(16, 12));
console.log(str.substring(10, 5));
*/

// split
/*
let str = "apple";
console.log(str.split(""));
console.log(str.split("", 3));
*/

// includes
/*
let str = "apple";
console.log(str.includes("a"));
console.log(str.includes("z"));
*/

// starts with
/*
let str = "Cats are cute";
console.log(str.startsWith("Cats"));
console.log(str.startsWith("are", 5));
*/

// ends with
/*
let str = "Cats are cute";
console.log(str.endsWith("cute"));
console.log(str.endsWith("are", 8));
*/

// padStart and padEnd
/*
console.log("abc".padStart(5, "*"));
console.log("abc".padEnd(9, "*"));
*/

// search
/*
let str = "The rain in SPAIN stays mostly in the plains";
console.log(str.search(/ain/));
console.log(str.search(/AIN/));
console.log(str.search(/AIN/i));
*/

// match
/*
let str = "The rain in SPAIN stays mainly in the plains";
console.log(str.match(/ain/));
console.log(str.match(/ain/g));
console.log(str.match(/ain/gi));
*/

// matchAll
let str = "The rain in SPAIN stays mainly in the plains";
let res = str.matchAll(/ain/g);
console.log([...res]);
