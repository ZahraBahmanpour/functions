function copyArrayAndMultiplyBy2(arr, callback) {
  const output = [];
  for (let num of arr) {
    output.push(callback(num));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

function multiplyBy3(input) {
  return input * 3;
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray, multiplyBy3);
console.log(result);
