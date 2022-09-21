/** Sum of Two **
 * 
 * Given two arrays, 'nums1' and 'nums2', return true if 
 * there are two numbers in both arrays which can add up to
 * an integer target. Otherwise, return false. 
 * 
 * @example
 * sumOfTwo([1, 2, 3], [5, 2], 8) -> true
 * sumOfTwo([0, 12, 8], [3, 1, 4], 2) -> false
 * sumOfTwo([4, 5, 8], [3, 1, 4], 9) -> true
 * 
 */

 const sumOfTwo = (nums1, nums2, target) => {
   const set = new Set();

   for (num of nums1) {
     set.add(target - num);
   }

   for (num of nums2) {
     if (set.has(num)) {
       return true;
     }
   }

   return false;
 };

module.exports = sumOfTwo;