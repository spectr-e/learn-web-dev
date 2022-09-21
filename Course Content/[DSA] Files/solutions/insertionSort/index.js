/** Insertion Sort **
 * 
 * Sort the 'nums' array using insertion sort.
 *  
 * @example
 * insertionSort([3, 2, 1]) -> [1, 2, 3]
 * insertionSort([0, 12, 8]) -> [0, 8, 12]
 * insertionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

 const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++){
        while(nums[i] < nums[i - 1]){
            let temp = nums[i - 1]
            nums[i - 1] = nums[i]
            nums[i] = temp
            i -= 1  
        }
    }
    return nums

}

module.exports = insertionSort;