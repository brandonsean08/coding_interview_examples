/**
 * Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies 
among the kids such that he or she can have the greatest number of candies among them. 
Notice that multiple kids can have the greatest number of candies.
 */

var kidsWithCandies = function(candies, extraCandies) {
    let maxValueOfCandies = 0;
    let returnArray = [];
    
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] > maxValueOfCandies) {
            maxValueOfCandies = candies[i];
        }
    }
    
    for(let i = 0; i < candies.length; i++) {
        let maxCandieValue = candies[i] + extraCandies;
        if(maxCandieValue >= maxValueOfCandies) {
            returnArray.push(true);
        } else {
            returnArray.push(false);
        }
    }
    
    return returnArray;
    
};