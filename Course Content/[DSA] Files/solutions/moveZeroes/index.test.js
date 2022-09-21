const moveZeroes = require("./index");

test(" ", () => {
  expect(moveZeroes([1, 0, 1])).toStrictEqual([1, 1, 0]);
});

test(" ", () => {
  expect(moveZeroes([1, 2, 3, 0, 1])).toStrictEqual([1, 2, 3, 1, 0]);
});

test(" ", () => {
  expect(moveZeroes([0, 0, 1, 2, 3])).toStrictEqual([1, 2, 3, 0, 0]);
});

test(" ", () => {
  expect(moveZeroes([-2, 1, -3, 4, -1, 2, -5, 0])).toStrictEqual([-2, 1, -3, 4, -1, 2, -5, 0]);
});

