/**
 * A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
 * For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would 
 * become [3, 4, 5, 1, 2].

Given an array a of n integers and a number, d, perform d left rotations on the array. 
Return the updated array to be printed as a single line of space-separated integers.
 */

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the rotLeft function below.
/**
 *
 * @param {array of integers} a
 * @param {number of left rotations} d
 */
function rotLeft(a, d) {
  //Step 1: We will perform the rotate procedure the same number of times as d
  for (let i = 0; i < d; i++) {
    //Step 2: Declare the index in the array that we are working with so that
    //we can access the index outside of the array loop and declare the variable
    //That will hold the first element on each rotation
    let workingArrayIndex, first;

    first = a[0];

    //Step 2: Loop through the entire array and set the currentIndex of the array to the index after it
    for (
      workingArrayIndex = 0;
      workingArrayIndex < a.length - 1;
      workingArrayIndex++
    ) {
      a[workingArrayIndex] = a[workingArrayIndex + 1];
    }
    //Step 3: Once we leave the loop, we are dealing with the last index, so we set it to the first index
    a[workingArrayIndex] = first;
  }

  return a;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nd = readLine().split(" ");

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const a = readLine()
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = rotLeft(a, d);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
