/**
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.

 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

 */

 /**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let integers = n.toString();
    let integerList = [];
    
    for(let i = 0; i < integers.length; i++) {
        integerList.push(parseInt(integers[i]))
    }
    
    let sum = 0;
    let product = 1;
    
    integerList.map(integer => {
        product = product * integer;
        sum += integer;
    })
    
    return product - sum;
};