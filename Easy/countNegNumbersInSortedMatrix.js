/**
Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.

Example 1:

Input: grid = [[4,3,2,-1],
              [3,2,1,-1],
              [1,1,-1,-2],
              [-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
Example 3:

Input: grid = [[1,-1],[-1,-1]]
Output: 3
Example 4:

Input: grid = [[-1]]
Output: 1
 */

 /**
  * Brute force approach in quadratic time
  */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let noOfNegs = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) {
            if(grid[i][j] < 0) noOfNegs++
        }
    }
    
    return noOfNegs;
};

/**
 * Optimal solution uses Binary Search. 
 * 
 * Input: grid = [[4,3,2,-1],
                 [3,2,1,-1],
                 [1,1,-1,-2],
                 [-1,-1,-2,-3]]
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let negCount = 0; //Tracks count of negatives
    let rowLen = grid[0].length; //Calculates the length of each row
    let colLen = grid.length; // Calculates the length of each column
    let rowPointer = 0; //Initializes the row pointer to be as we will start in the first row
    let colPointer = rowLen - 1; //Initializes the column pointer to be the length of the row - 1 (last index)

    //While our rowPointer is not at the end of the column and the columnPointer is not at the start of the row
    while(rowPointer < colLen && colPointer >= 0) {
        //If the current cell is negative then we know that everything below it is negative as well
        if(grid[rowPointer][colPointer] < 0) {
            //So we add the number of cells below it to the count
            negCount += colLen - rowPointer;
            //And we move one cell to the left
            colPointer -= 1;
        } else {
            //If its positive, then we move one row down
            rowPointer += 1;
        }
    } 

    return negCount;
};