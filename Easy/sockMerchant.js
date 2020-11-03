/**
 * Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. 
 * 
 * Given an array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are.

For example, there are n = 7 socks with colors ar=[1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. 
There are three odd socks left, one of each color. The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of 
matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer n, the number of socks represented in ar.
The second line contains n space-separated integers describing the colors ar[i] of the socks in the pile.

Constraints

 1 <= n <= 100 
 1<= ar[i] <= 100 where 0 <= i <= n
 
Output Format

Return the total number of matching pairs of socks that Alex can sell.

Sample Input
9
10 20 20 10 10 30 50 10 20

Sample Output
3

 * 
 * 
 * 
 * 
 * 
 */

'use strict';

const fs = require('fs');

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

// Complete the sockMerchant function below.

/**
 * 
 *  The basic idea behind the solution is that we will loop through the entire list of socks and add the color of the sock to the Set
    of sock colors only if the Set of sock colors doesn't include it already. If it does include it, it means we have encountered
    a pair of socks, whereby we will increment the count of pairs and then remove the color from the color Set, so that the next time 
    we encounter the color, it will only be a single one and not a pair.

    Big-O:
    Time: O(n)
    Space: O(n)
 */
function sockMerchant(n, ar) {
    //Step 1: Declare a Set that will hold all of the colors we want to deal with
    let colorList = [];
    //Step 2: Declare a variable that will hold the count of the number of pairs. We set it to 0 initally as we have counted 0 of them when we first get the list.
    let noOfPairs = 0;

    //Step 3: Loop through the entire list of socks
    for(let i = 0; i < n; i++) {
        //Step 4: Add the color to the colorList if it isn't there already
        if(!colorList.includes(ar[i])) {
            colorList.push(ar[i]);
        } else {
            //Step 5: If it is there already, increment noOfPairs and remove the color from the list
            noOfPairs++;
            let colorIndex = colorList.indexOf(ar[i]);
            colorList.splice(colorIndex, 1);
        }
    }

    return noOfPairs;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
