const threeSum = require("./index");

test(" ", () => {
  expect(threeSum([2, 9, 18, 78, 1, 5, -2, 3, 9, 0, -8])).toStrictEqual([
    [-8, 3, 5],
    [-2, 0, 2],
  ]);
});

test(" ", () => {
  expect(threeSum([20, -5, 30, 20, -15, -3, -21, 8, -6])).toStrictEqual([
    [-15, -5, 20],
    [-5, -3, 8],
  ]);
});

test(" ", () => {
  expect(threeSum([29, 2, 8, -2, -15, 17, -10])).toStrictEqual([
    [-15, -2, 17],
    [-10, 2, 8],
  ]);
});

test(" ", () => {
  expect(threeSum([9, 2, 4, 8, 9, 13, 2])).toStrictEqual([]);
});

test(" ", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test(" ", () => {
  expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]);
});

test(" ", () => {
  expect(
    threeSum([-4, -4, -3, -3, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
  ).toStrictEqual([
    [-4, -2, 6],
    [-4, 0, 4],
    [-4, 1, 3],
    [-4, 2, 2],
    [-3, -3, 6],
    [-3, 0, 3],
    [-3, 1, 2],
    [-2, -2, 4],
    [-2, 0, 2],
  ]);
});
