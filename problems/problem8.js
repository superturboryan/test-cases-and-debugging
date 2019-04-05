let verifyEquals = require("./verify-equals.js");

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use at least one for loop for this exercise.

HINTS: 
 - Create an empty array
 - Add each character of the string to that empty array (use the array method push). You'll need to use a for loop
 - Create another empty array
 - Add each character of the string to new empty array in reverse order
 - Convert that array back to a string (use the join array method)
 
*/

// we need 5 test cases.

let inputs = ["hello", "Ryan", " r y a n ", 9, "nope"];

let outputs = ["olleh", "nayR", " n a y r ", undefined, "epon"];

function f(str) {
  let retArr = [];

  if (typeof str != "string") return undefined;

  letterArr = str.split("");

  for (letter of letterArr) {
    retArr.unshift(letter);
  }

  retArr = retArr.join("");

  return retArr;
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
