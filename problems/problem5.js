let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [[2, 7], [3, 4], [5, 5], [3, "a"], [666]];

let outputs = [14, 12, 25, undefined, undefined];

//This regex returns true if there are only digits
//
//      /\d/.test(word)

/*
The input of the function is an array.
Make this function return the product of the two numbers in the array. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  if (input.length < 2) {
    return undefined;
  }

  let product = 0;

  for (num of input) {
    if (!/\d/.test(num)) {
      return undefined;
    }

    if (product === 0) {
      product = num;
    } else product *= num;
  }

  return product;
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
