const bubbleSort = require("./index");

test(" ", () => {
  expect(bubbleSort([1, 0, 1])).toStrictEqual([0, 1, 1]);
});

test(" ", () => {
  expect(bubbleSort([1, 2, 3, 0, 1])).toStrictEqual([0, 1, 1, 2, 3]);
});

test(" ", () => {
  expect(bubbleSort([0, 0, 1, 2, 3])).toStrictEqual([0, 0, 1, 2, 3]);
});

test(" ", () => {
  expect(bubbleSort([-2, 1, -3, 4, -1, 2, -5, 0])).toStrictEqual([-5, -3, -2, -1, 0, 1, 2, 4]);
});

test(" ", () => {
  expect(bubbleSort([-9, -11, -10, -9, 1, 2, -8, -7])).toStrictEqual([-11, -10, -9, -9, -8, -7, 1, 2]);
});
