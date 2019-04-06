let verifyEquals = require("./verify-equals.js");

/*
Make a function that returns true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/

// we need 5 test cases.
let inputs = [
  "abacaba",
  "1 2 1",
  "Ryan",
  "RyannayR",
  "Is this how it's done enod s'ti woh siht sI"
];

let outputs = [true, true, false, true, true];

function f(str) {
  let letters = str.split("");

  let reverseLetters = letters.reverse();

  let reverseString = reverseLetters.join("");

  return str === reverseString;
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

//Checked and passed!
