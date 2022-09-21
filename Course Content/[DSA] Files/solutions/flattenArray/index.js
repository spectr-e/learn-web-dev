/** Flatten Array **
 * 
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array. 
 *  
 * 
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 * 
 */

 const flatten = (nums) => {
   const flattened = [];
 
   const flattenHelper = (nums) => {
     for (elem of nums) {
       if (Array.isArray(elem)) {
         flattenHelper(elem);
       } else {
         flattened.push(elem);
       }
     }
   };
   flattenHelper(nums);
 
   return flattened;
 };

module.exports = flatten; 