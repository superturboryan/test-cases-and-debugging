let verifyEquals = require("./verify-equals.js");

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/

// we need 5 test cases.
let inputs = [
  "how am i doing",
  "hey you over there",
  "there over you hey",
  "",
  "hey hey you"
];

let outputs = ["doing", "there", "there", "", "you"];

function f(str) {
  if (str === "") return str;

  let words = str.split(" ");

  let ret = "";

  for (word of words) {
    if (word.length >= ret.length) ret = word;
  }

  return ret;
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
