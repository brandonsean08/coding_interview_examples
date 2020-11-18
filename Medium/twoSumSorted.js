/**
 * Given an array of integers that is already SORTED IN ASCENDING order, find two numbers such that
 * they add up to a specific target number
 */

 /**
  * Tip: Use pointers.
  * 
  * Start with pointer a as the first element and pointer b as the last element. Check the sum of pointer_a 
  * and pointer b an if the sum is greater than the target, decrement pointer_b and if the sum is smaller than
  * the target, increment pointer a
  */

  let twoSum = (arr, target) => {
      let a_pointer = 0;
      let b_pointer = arr.length - 1;

      while(a_pointer <= b_pointer) {
          let sum = arr[a_pointer] + arr[b_pointer];

          if(sum > target) {
            b_pointer -= 1;
          } else if(sum < target) {
            a_pointer += 1;
          } else {
              return [a_pointer, b_pointer];
          }
      }

      return [a_pointer, b_pointer];
  }