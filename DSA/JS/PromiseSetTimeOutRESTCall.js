//Promise - return a hello world string
//SetTimeout
//REST fetch
//Settimeout with promise
//REST with promise
//REST with settimeout with promise

const s = new Promise((resolve) => {
  console.log("Hello World");
  resolve("s");
}).then((s) => console.log(s + "New World"));
console.log(s);

// console.log("I am asshole -->", s);

// a = [4, 2, 6, 4, 6, 7, 8];
// const arrayCheck = function (a) {
//   return new Promise((resolve, reject) => {
//     ifOddExist = false;
//     ifOddExist = a.some((item) => item % 2 == 1);
//     if (ifOddExist) {
//       resolve(a.reduce((i, item) => (i = i + item)));
//     } else {
//       reject("Pritam is Idiot");
//     }
//   });
// };

// arrayCheck(a)
//   .then((value) => console.log(value))
//   .catch((s) => console.log(s));

function anurag() {
  console.log(" Pritam Pritam Pritam");
}
setTimeout(anurag, 3000);

// b = "hell";

// function my() {
//   setTimeout(pritam(b), 3000);
// }
// function pritam(b) {
//   console.log(b);
// }

// my();

// booo = "ddddd";
// function a() {
//   setTimeout((booo) => {
//     console.log(booo);
//   }, 1000);
// }

// a();
