// pro tip: use nodemon instead of node
let verifyEquals = require("./verify-equals.js");

// we need 6 test cases.
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["sub", 700, 34],
  ["mult", 5, 5],
  ["gibberish"],
  ["add", 5, "nope"]
];

let outputs = [30, undefined, 666, 25, undefined, undefined];

/*
The function takes an array. The array has length 3. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if (arr.length !== 3) return undefined;

  if (arr[0] != "add" && arr[0] != "sub" && arr[0] != "mult") return undefined;

  if (!/\d/.test(arr[1]) || !/\d/.test(arr[2])) return undefined;

  let ret = 0;

  switch (arr[0]) {
    case "add":
      ret = arr[1] + arr[2];
      break;

    case "sub":
      ret = arr[1] - arr[2];
      break;

    case "mult":
      ret = arr[1] * arr[2];
      break;

    default:
      break;
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
console.log("All tests passed for " + __filename);

//Checked!
