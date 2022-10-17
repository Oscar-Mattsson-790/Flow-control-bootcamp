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

// 6.
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

// 7.
// let height = 1.78;
// let weight = 81;

// let oscarBmi = weight / (height * height);
// console.log(oscarBmi);

// if (oscarBmi < 18.5) {
//   console.log("Underweight");
// } else if (oscarBmi >= 18.5 && oscarBmi <= 25) {
//   console.log("Normal weight");
// } else if (oscarBmi >= 25 && oscarBmi <= 30) {
//   console.log("Overweight");
// } else {
//   console.log("Obese");
// }

// 8.
// function getDayName(dayNum) {
//   switch (dayNum) {
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuseday";
//       break;
//     case 3:
//       day = "Wednsday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       day = false;
//   }
//   return day;
// }
// console.log(getDayName(1));

// switch (1) {
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuseday";
//     break;
//   case 3:
//     day = "Wednsday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = false;
// }
// console.log(day);

// 9.
// function getMonthName(monthNum) {
//   switch (monthNum) {
//     case 1:
//       month = "January";
//       break;
//     case 2:
//       month = "February";
//       break;
//     case 3:
//       month = "March";
//       break;
//     case 4:
//       month = "April";
//       break;
//     case 5:
//       month = "May";
//       break;
//     case 6:
//       month = "June";
//       break;
//     case 7:
//       month = "July";
//       break;
//     case 8:
//       month = "August";
//       break;
//     case 9:
//       month = "September";
//       break;
//     case 10:
//       month = "October";
//       break;
//     case 11:
//       month = "November";
//       break;
//     case 12:
//       month = "December";
//       break;
//     default:
//       month = false;
//   }
//   return month;
// }
// console.log(getMonthName(1));
