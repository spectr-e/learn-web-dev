const twoSortedSum = require("./index");

test(" ", () => {
  expect(twoSortedSum([1, 3, 4, 5, 7, 11], 9)).toStrictEqual([2, 3]);
});

test(" ", () => {
  expect(twoSortedSum([1, 2, 4, 9], 13)).toStrictEqual([2, 3]);
});

test(" ", () => {
  expect(twoSortedSum([1, 2], 3)).toStrictEqual([0, 1]);
});

test(" ", () => {
  expect(twoSortedSum([1, 21, 40, 90], 61)).toStrictEqual([1, 2]);
});
