/**
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

 */

 /**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let indexCount = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "R") {
            indexCount ++;
        } else if(s[i] == "L") {
            indexCount --;
        }
        
        if(indexCount == 0) {
            count ++;
        }
    }
     return count;
};