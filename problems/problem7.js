let verifyEquals = require("./verify-equals.js");

// we need 7 test cases.
let inputs = [
  ["YeahBuddy", 2],
  ["Trythisoneoutforsize", 3],
  [" ( ( ) ) ", 4],
  ["3", 3],
  [666, 6],
  ["4", -1],
  ["Will it run???"]
];

let outputs = [
  "YeahBuddyYeahBuddy",
  "TrythisoneoutforsizeTrythisoneoutforsizeTrythisoneoutforsize",
  " ( ( ) )  ( ( ) )  ( ( ) )  ( ( ) ) ",
  "333",
  undefined,
  "",
  undefined
];

/*
The function input is an array as input. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:
*/

function f(arr) {
  if (typeof arr[0] != "string" || typeof arr[1] != "number") return undefined;

  if (arr.length != 2) return undefined;

  if (arr[1] === -1) return "";

  let ret = "";

  let repeat = arr[1];

  let str = arr[0];

  for (let x = 0; x < repeat; x++) {
    ret += str;
    console.log(ret);
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
runTest(5);
runTest(6);
console.log("All tests passed for " + __filename);

//Checked!
