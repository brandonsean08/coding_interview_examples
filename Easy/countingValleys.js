/**
 * An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

    A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
    A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
    Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

    Example

    Steps = 8 path = [DDUUUUDD]

    The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

    Function Description

    Complete the countingValleys function in the editor below.

    countingValleys has the following parameter(s):

    int steps: the number of steps on the hike
    string path: a string describing the path
    Returns

    int: the number of valleys traversed
    Input Format

    The first line contains an integer , the number of steps in the hike.
    The second line contains a single string , of  characters that describe the path.

    Constraints

    Sample Input

    8
    UDDDUDUU
    Sample Output

    1
    Explanation

    If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

    _/\      _
       \    /
        \/\/
    
    The hiker enters and leaves one valley.
 * 
 * 
 * 
 */

/**
 * The basic premise of the answer is that we will traverse the entire string and increment the 'position' by 1 if it
 * is up and decrement the position by 1 if it is down. This will help us determine when we get back to Sea level again.
 * Sea Level will be a position of 0 (also our starting point). At every step, we will check to see if the position
 * is at 0, if it is, then we know that the person has either gone up and come down, or gone down and then come up
 * (we don't care about how many times in between). Once we know that the user is at Sea Level, we simply check if the
 * user's step was 'U', if so, they must have gone through a valley, so we increment 'noOfvalleys' by 1.
 */
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  //Step 1: Declare the current Position (0 is sea level) and the noOfValleys.
  let currentPosition = 0;
  let noOfValleys = 0;

  //Step 2: Loop through the entire String (path)
  for (let i = 0; i < steps; i++) {
    //Step 3: Check if the value of the path is 'U' or 'D' to increment or decrement the current position
    if (path[i] == "U") {
      currentPosition = currentPosition + 1;
    } else {
      currentPosition = currentPosition - 1;
    }

    //Step 4: Check to see if the current position is back at sea level (0), if it is, then check if the step was
    //Up or down. If it was up, then increment the noOfValleys.
    if (currentPosition == 0 && path[i] == "U") {
      noOfValleys = noOfValleys + 1;
    }
  }

  return noOfValleys;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const steps = parseInt(readLine().trim(), 10);

  const path = readLine();

  const result = countingValleys(steps, path);

  ws.write(result + "\n");

  ws.end();
}
