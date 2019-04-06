let verifyEquals = require("./verify-equals.js");

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

even though there is a space before the a in adipisicing
*/

// we need 5 test cases.
let inputs = [
  "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam",
  "Meow for food, then when human fills food dish, take a few bites of food and continue meowing run outside as soon as door open and lick yarn hanging out of own butt."
];

let outputs = [
  "Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam",
  "Meow for food, then when human fills foo\nd dish, take a few bites of food and con\ntinue meowing run outside as soon as doo\nr open and lick yarn hanging out of own \nbutt."
];

function f(str) {
  //RegEx that splits string into array of strings 40 char long with remainder at the end
  let lines = str.match(/.{1,40}/g);

  //Empty array to add modified lines to
  let modLines = [];

  //Iterate over the original input lines
  for (line of lines) {
    //Split each line into array of char to check if first car is a space " "
    let chars = line.split("");

    if (chars[0] === " ") {
      //Shift the element out of the first position if so
      chars.shift();
    }
    //Push a new line \n to the end of the char array of each line EXCEPT for the final line
    if (chars.length >= 39) {
      chars.push("\n");
    }

    //The modified line to add will be the characters joined together
    let modLine = chars.join("");

    //Add the line to the array of modified lines
    modLines.push(modLine);
  }
  //Join the array of modified lines into a string and return
  let output = modLines.join("");

  return output;
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);

console.log("All tests passed for " + __filename);

//Checked!!!
