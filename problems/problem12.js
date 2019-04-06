let verifyEquals = require("./verify-equals.js");

/*
Make this function return the elements that are unique to array1 and array2.
An element is unique if it only appears once.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
uniqueElements([[1,2,3], [3,2,1]]); // []
uniqueElements(2); // undefined, not an array

HINTS: 
   - Use a for loop inside another for loop
*/

// we need 5 test cases.
let inputs = [
  [[0, 1, 2, 3], [1, 3, 4, 5]],
  [[1, 2, 3], [1, 2, 3]],
  [[2, 3, 5], [3, 4]],
  [[2, 4, 5], 6],
  [[1, 2, 3, 4], [1, 2, 3, 4, 5, 6]]
];

let outputs = [[0, 2, 4, 5], [], [2, 4, 5], undefined, [5, 6]];

function f(input) {
  let arr1 = input[0];
  let arr2 = input[1];

  let ret = [];

  if (typeof arr1 != "object" || typeof arr2 != "object") {
    return undefined;
  }

  //Check if arr2 contains any individual arr1 elements
  for (let x = 0; x < arr1.length; x++) {
    if (!arr2.includes(arr1[x])) {
      ret.push(arr1[x]);
    }
  }

  //Check if arr1 contains any individual arr2 elements
  for (let x = 0; x < arr2.length; x++) {
    if (!arr1.includes(arr2[x])) {
      ret.push(arr2[x]);
    }
  }

  //Sort return array numerically
  ret = ret.sort((a, b) => a - b);

  return ret;
}

//   for (let x = 0; x < arr1.length; x++) {
//     for (let y = 0; y < arr2.length; y++) {
//       if (arr1[x] != arr2[y]) {

//       }
//     }
//   }
//////////////////////////////////////////////////
//   for (let x = 0; x < arr2.length; x++) {
//     for (let y = 0; y < arr1.length; y++) {
//       if (arr2[x] != arr1[y]) {
//         ret.push(arr2[x]);
//       }
//     }
//   }

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  console.log("Expected: " + expected + "\nActual: " + actual);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("All tests passed for " + __filename);

//Checked!
