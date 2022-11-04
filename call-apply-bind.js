let person1 = {
  firstName: "Sahra",
  lastName: "Bahmanpour",
};

let person2 = {
  firstName: "Sara",
  lastName: "Bahrami",
};

const printFullName = function (hometown, age) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + age
  );
};
printFullName();

printFullName.call(person1, "Esfahan", 28);
printFullName.apply(person2, ["Esfahan", 28]);
let func = printFullName.bind(person1);
func("tehran");
// ------------------------------------------------------
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = function () {
  foo.call(obj);
};
bar();
bar.call(window);
// ------------------------------------------------------
function createObject() {
  console.log(this.foo);
  return {
    foo: 42,
    bar: function () {
      console.log(this.foo);
    },
  };
}

createObject.call({ foo: 21 }).bar();
