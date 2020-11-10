/**
 * Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
 * She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

    For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example,  c = [0, 1, 0, 0, 0, 1, 0] indexed from 0...6. 
    The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. 
    She could follow the following two paths: 0->2->4->6 or 0->2->3->4->6. 
    The first path takes 3 jumps while the second takes 4.

    Function Description

    Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

    jumpingOnClouds has the following parameter(s):

    c: an array of binary integers
    Input Format

    The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

    Constraints

    - 2 <= n <= 100
    - c[i] E {0, 1}
    - c[0] = c[n - 1] = 0

    Output Format

    Print the minimum number of jumps needed to win the game.

    Sample Input 0

    7
    0 0 1 0 0 1 0
    Sample Output 0

    4
 */


 /**
  * The basic premise of the solution is that we want to check the best case scenario first which is two jumps.
  * If the currentIndex + 2 is a 0 then it is a valid jump so we will always want to do this. So we make the jump
  * then increment the index by two and the number of jumps by 1. If not, then we will just make increment the index by 1 and the
  * jumps by 1.
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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    //Step 1: Declare the noOfJumps and the currentIndex (which are both 0)
    let noOfJumps = 0;
    let currentIndex = 0;

    //Step 2: Start a loop that will terminate when we have reached the final index (length -1)
    while(currentIndex < c.length - 1) {
        //Step 3: Test best case scenario (index + 2 'jumps')
        if(c[currentIndex + 2] == 0) {
            noOfJumps++;
            currentIndex += 2;
        } else {
            noOfJumps++;
            currentIndex++;
        }
    }

    return noOfJumps;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
