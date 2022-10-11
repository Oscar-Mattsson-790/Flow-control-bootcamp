// 1.
// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log("a is bigger than b");
// } else {
//   console.log("a is smaller than b");
// }

// 2.
// let a = "apple";
// let b = "pear";

// if (a === b) {
//   console.log("a is equal to b");
// } else {
//   console.log("a is not equal to b");
// }

// if (a !== b) {
//   console.log("a is not equal to b");
// } else {
//   console.log("a is equal to b");
// }

// 3.
// let a = 30;
// let b = 50;

// if (a > b) {
//   console.log(`${a} is bigger than ${b}`);
// } else if (b > a) {
//   console.log(`${b} is bigger than ${a}`);
// }

// 4.
// let number = 22;
// if (number % 2 === 0) {
//   console.log(`${number} is even`);
// } else if (number % 2 === 1) {
//   console.log(`${number} is not even`);
// }

// 5.
// let person = 130;

// if (person >= 150) {
//   console.log(true);
// } else if (person < 150) {
//   console.log(false);
// }

// 6. INTE KLAR //////////////////
// const small = "small";
// const medium = "medium";
// const large = "large";
// const platinum = "platinum";

// let akband = platinum;
// Verson 1
// if (akband === large || akband === platinum) {
//   console.log(`You can ride balder with your ${akband} pass`);
// } else {
//   console.log(`You CAN NOT ride balder with your ${akband} pass!`);
// }

// Version 2
// if (akband === large) {
//   console.log(`You can ride balder with your ${akband} pass`);
// } else if (akband === platinum) {
//   console.log(`You can ride balder with your ${akband} pass`);
// } else {
//   console.log(`You CAN NOT ride balder with your ${akband} pass!`);
// }

// if (person === balder) {
//   console.log("You are allowed to ride balder");
// } else if (person !== balder) {
//   console.log("you are not allowed to ride balder");
// }

// 7.
let height = 1.78;
let weight = 81;

let oscarBmi = weight / (height * height);
console.log(oscarBmi);

if (oscarBmi < 18.5) {
  console.log("Underweight");
} else if (oscarBmi >= 18.5 && oscarBmi <= 25) {
  console.log("Normalweight");
} else if (oscarBmi >= 25 && oscarBmi <= 30) {
  console.log("Overweight");
} else {
  console.log("Fetma");
}

// 8.

// let day;
// switch (new Date().getDay()) {
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuseday";
//     break;
//   case 3:
//     day = "untzday";
//     break;
//   case 4:
//     day = "thirsday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   case 6:
//     day = "saturday";
//     break;
//   case 7:
//     day = "sunday";
//     break;
// }
// console.log(day);
