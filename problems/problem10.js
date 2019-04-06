let verifyEquals = require("./verify-equals.js");
/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

HINT:
   - Use a for loop to capitalize the letters one by one
   - Use the toUpperCase string method

*/

// we need 5 test cases.
let inputs = [
  "ryan",
  "ryaN FORSYTH",
  "the best is yet to come",
  "",
  "hey you over there!"
];

let outputs = [
  "Ryan",
  "Ryan Forsyth",
  "The Best Is Yet To Come",
  "",
  "Hey You Over There!"
];

function f(str) {
  if (str === "") return "";

  let capWords = [];

  let words = str.split(" ");

  for (word of words) {
    word = word.toLowerCase();

    let letters = word.split("");

    letters[0] = letters[0].toUpperCase();

    let capWord = letters.join("");

    capWords.push(capWord);
  }

  return capWords.join(" ");
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
