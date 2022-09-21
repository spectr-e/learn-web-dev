/** Bubble Sort **
 * 
 * Sort the 'nums' array using bubble sort.
 *  
 * @example
 * bubbleSort([3, 2, 1]) -> [1, 2, 3]
 * bubbleSort([0, 12, 8]) -> [0, 8, 12]
 * bubbleSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

 const bubbleSort = (nums) => {
   let sorted = false;

   while (!sorted) {
     sorted = true;
     for (let i = 0; i < nums.length - 1; i++) {
       if (nums[i] > nums[i + 1]) {
         sorted = false;
         let temp = nums[i];
         nums[i] = nums[i + 1];
         nums[i + 1] = temp;
       }
     }
   }
   return nums;
 };

module.exports = bubbleSort;