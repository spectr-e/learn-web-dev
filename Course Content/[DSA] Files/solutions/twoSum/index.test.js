const twoSum = require("./index");

test(" ", () => {
  expect(twoSum([1,99, 7, 9], 10)).toStrictEqual([0, 3]);
});

test(" ", () => {
  expect(twoSum([1, 2, 4 , 9], 13)).toStrictEqual([2, 3]);
});

test(" ", () => {
  expect(twoSum([1, 2], 3)).toStrictEqual([0, 1]);
});

test(" ", () => {
  expect(twoSum([1, 21, 40 , 9], 61)).toStrictEqual([1, 2]);
});
