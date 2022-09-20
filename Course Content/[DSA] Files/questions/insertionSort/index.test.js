const insertionSort = require("./index");

test(" ", () => {
  expect(insertionSort([1, 0, 1])).toStrictEqual([0, 1, 1]);
});

test(" ", () => {
  expect(insertionSort([1, 2, 3, 0, 1])).toStrictEqual([0, 1, 1, 2, 3]);
});

test(" ", () => {
  expect(insertionSort([0, 0, 1, 2, 3])).toStrictEqual([0, 0, 1, 2, 3]);
});

test(" ", () => {
  expect(insertionSort([-2, 1, -3, 4, -1, 2, -5, 0])).toStrictEqual([-5, -3, -2, -1, 0, 1, 2, 4]);
});

