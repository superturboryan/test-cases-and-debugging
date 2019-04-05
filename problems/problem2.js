let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = ["abc", "a", "brad", " ", "ronal d "];

let outputs = ["c", "a", "d", undefined, "d"];

let isLetter = letter => letter.toLowerCase() !== letter.toUpperCase();

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
  if (str === undefined || str === "" || str === " ") {
    return undefined;
  }

  let letters = str.split("");

  for (let x = letters.length - 1; x >= 0; x--) {
    if (isLetter(letters[x])) {
      return letters[x];
    }
  }
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
console.log("All tests passed for " + __filename);

//CHECKED!
