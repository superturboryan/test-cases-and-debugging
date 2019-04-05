let verifyEquals = require("./verify-equals.js");

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [10, 20],
  [1],
  [2, "R"],
  [],
  [undefined, undefined]
];

let outputs = [6, 0, 30, undefined, undefined, undefined];

//This regex returns true if there are only digits
//
//      /\d/.test(word)

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  // if (input === undefined) {
  //   return undefined;
  // }

  if (input.length < 2) {
    return undefined;
  }

  let sum = 0;

  for (num of input) {
    if (!/\d/.test(num)) {
      return undefined;
    }

    sum += num;
  }

  return sum;
}

function runTest(i) {
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
console.log("All tests passed for " + __filename);

//CHECKED!
