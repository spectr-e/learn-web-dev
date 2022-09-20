/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */

// MOST OPTIMAL SOLUTION 
// O(n) time | O(1) space
const maxSubArray = (nums) => {
   let maxSum = nums[0]
   let sum = 0

   for (let i = 0; i < nums.length; ++i) { // O(n) time
      if (sum < 0) {
         sum = 0
      }
      sum += nums[i]
      maxSum = Math.max(maxSum, sum)
   }

   return maxSum
}

// O(n^2) time | O(1) space
const maxSubArray2 = (nums) => {
   let maxSum = nums[0];

   for (let i = 0; i < nums.length; ++i) {  // O(n) time
      let sum = 0;
      for (let j = i; j < nums.length; ++j) { // O(n) time
         sum += nums[j]
         maxSum = Math.max(maxSum, sum);
      }
   }

   return maxSum
}

// O(n^3) time | O(n) space
const maxSubArray3 = (nums) => {
   let maxSum = nums[0];

   for (let i = 0; i < nums.length; ++i) { // O(n) * O(n^2) -> O(n^3)
      for (let j = i + 1; j <= nums.length; ++j) { // O(n) * O(2n) -> O(n^2)
         const subarray = nums.slice(i, j) // O(n) time & space
         const sum = subarray.reduce((acc, curr) => acc + curr) // O(n)
         maxSum = Math.max(maxSum, sum)
      }
   }

   return maxSum
}

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
