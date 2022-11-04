// function x() {
//   let a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
// -----------------------------------------------------
// function x() {
//   let a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// const z = x();
// // console.log(z);
// z();
// ----------------------------------------------------
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// const z = x();
// z();
//------------------------------------------------------
// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();
// ------------------------------------------------------
// Use of Closures:
// Module Design Pattern
// Currying
// Memoization
// Maintening state in async world...
// ------------------------------------------------------
// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// ---------------------------------------------
// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     console.log(name);
//   };
// }

// let name = "John";
// let work = makeWorker();

// work();
//------------------------------------------------
// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());
// --------------------------------------------------
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(1)(2));
// console.log(sum(5)(-1));
