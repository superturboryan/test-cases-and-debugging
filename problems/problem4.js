let verifyEquals = require("./verify-equals.js");

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["ryan", 0],
  [" ryan", 0],
  ["kkvkk", 2],
  ["12345a", 3],
  ["  ", 2],
  ["DecodeRocks!", 11]
];

let outputs = [
  "o",
  undefined,
  "r",
  undefined,
  "v",
  undefined,
  undefined,
  undefined
];

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/

let isLetter = letter => letter.toLowerCase() !== letter.toUpperCase();

function f(arr) {
  if (arr[1] > arr[0].length - 1 || !arr.length || arr[0] === undefined)
    return undefined;

  let letterArr = arr[0].split("");

  if (isLetter(letterArr[arr[1]])) return letterArr[arr[1]];
  else {
    return undefined;
  }

  // if (isLetter(arr[arr[1]])) return arr[arr[1]];
  // else if (!isLetter(arr[arr[1]])) return undefined;
}

function runTest(i) {
  let expected = outputs[i];
  let input = inputs[i];
  let actual = f(input);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
console.log("All tests passed for " + __filename);

//Checked!
