const nums = [1, 2, 4, 9]
const target = 13

const map = new Map();

for (let i = 0; i < nums.length; ++i) {
  map.set(nums[i], true)

  if (nums[i] === 9) {
    console.log(map.get(4)) // O(1) time
  }
}