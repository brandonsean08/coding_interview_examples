/**
 * Given an array of integers that is not sorted, find two numbers such that
 * they add up to a specific target number
 */

 /**
  * Tip: Use pointers.
  * 
  * Start with pointer a as the first element and pointer b as the last element. Check the sum of pointer_a 
  * and pointer b an if the sum is greater than the target, decrement pointer_b and if the sum is smaller than
  * the target, increment pointer a
  */

  //Brute force method: Loop through every possible combination of numbers in the array and compute the sum.
let twoSumUnsorted = (nums, target) => {
    for(let i = 0; i < nums.length - 1; i ++) {
        for(let j = 1; j < nums.length - 1; j++) {
            sum = nums[i] + nums[j];
            if(sum = target) {
                return [i, j]
            }
        }
    }
}

//Quicker solution using ther Hash approach (has a slightly bigger space complexity as it needs to create a hashmap)
let twoSum = (nums, target) => {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        
        if(map.has(compliment) && map.get(compliment) !== i) {
            return [i, map.get(compliment)];
        }
    }
    }
}
