let verifyEquals = require("./verify-equals.js");

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/

// we need 5 test cases.
let inputs = [[1, 2, 3], [2], [], [1, 2, "three", 4], [10, 100, 1000]];

let outputs = [6, 2, 0, 7, 1110];

function f(arr) {
  let sum = 0;

  if (arr.length === 0) return sum;

  if (arr.length === 1) return arr[0];

  for (num of arr) {
    if (typeof num === "number") {
      sum += num;
    }
  }

  return sum;
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("All tests passed for " + __filename);

//Checked!
