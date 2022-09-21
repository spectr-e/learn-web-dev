/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */

// OPTIMAL SOLUTION
// O(n) time | O(n) space
const containsDuplicate = (nums) => {
   const set = new Set() // O(n) space

   for (let i = 0; i < nums.length; ++i) { // O(n) time
      if (set.has(nums[i])) { // O(1) time
         return true
      }
      set.add(nums[i])
   }

   return false;
}

// SORTING SOLUTION 80k - 100k
// O(nlog(n)) time | O(n) space
// const containsDuplicate = (nums) => {
//    const sortedArr = nums.sort((a, b) => a - b) // O(n) space | O(nlog(n)) time

//    for (let i = 0; i < sortedArr.length - 1; ++i) { // O(n) time
//       if (sortedArr[i] === sortedArr[i + 1]) {
//          return true;
//       }
//    }

//    return false;
// }

// BRUTEFORCE SOLUTION 60k - 80k
// O(n^2) time | O(1) space
// const containsDuplicate = (nums) => {
//    for (let i = 0; i < nums.length - 1; ++i) { // O(n) time
//       for (let j = i + 1; j < nums.length; ++j) { // O(n) time
//          if (nums[i] === nums[j]) {
//             return true;
//          }
//       }
//    }
//    return false;
// }

module.exports = containsDuplicate;
