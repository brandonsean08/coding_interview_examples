/**
 * Given a 6X6 2D Array
 * 111000
 * 010000
 * 111000
 * 000000
 * 000000
 * 000000
 * 
 * An hourglass A is a subset of values with indeces falling in this pattern
 * 
 * abc
 *  d 
 * efg
 * 
 * there are 16 Hourglasses arr
 * 
 * Calculate the hourglass sum for every hourgalss in a given array and print the largest sum.
 * 
 */

'use strict';

const fs = require('fs');
const { Console } = require('console');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    //Step 1: Initialize the maximum value. In this case, because the values can be -9 <= i <= 9,
    //The smallest value to initialize as the max would be -9 * 7 (as an hourglass is the sum of 7 digits)
    let maxHourglassValue = -63;

    //Step 2: Loop through every single row and every single column in the 2D array.
    //*NOTE* The final Hourglass in a row can only be created when there are 2 elements to the right of the current element. 
    //Therefore the last two columns and last two rows will not be considered as they cannot produce a valid hourglass
    for(let i = 0; i <= arr.length - 3; i++) {
        for(let j = 0; j <= arr.length - 3; j++) {
            console.log(i);
            console.log(j)
            //Step3: Calculate the top sum of the hourglass
            let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]

            //Step 4: Calculate the middle of the hourglass
            sum += arr[i + 1][j + 1];

            //Step5: Calculate the bottom of the hourglass
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            if(sum > maxHourglassValue) {
                maxHourglassValue = sum;
            }
        }

       
    }
    return maxHourglassValue;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
