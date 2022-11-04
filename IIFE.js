// Immediately Invoked Function Expression
(function () {
  console.log("Mina Hosseini");
})();

(myFunc = function (name = "Sahra") {
  console.log(name + " Hosseini");
})();
myFunc("Maryam");

// USe cases
const x = "Something";
(() => {
  const x = "something else";
  console.log(x);
})();
