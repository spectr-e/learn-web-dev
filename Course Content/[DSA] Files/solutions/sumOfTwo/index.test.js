const sumOfTwo = require("./index");

test(" ", () => {
  expect(sumOfTwo([1], [1, 2], 2)).toStrictEqual(true);
});

test(" ", () => {
  expect(sumOfTwo([10, 2, 9, 0], [1, 2], 12)).toStrictEqual(true);
});

test(" ", () => {
  expect(sumOfTwo([10, 2, 9, 0], [1, 2, 3, 1, 9], 18)).toStrictEqual(true);
});

test(" ", () => {
  expect(sumOfTwo([12, 14, 18, 9], [1, 2], 16)).toStrictEqual(true);
});

test(" ", () => {
  expect(sumOfTwo([12, 14, 18, 9], [1, 2], 22)).toStrictEqual(false);
});

test(" ", () => {
  expect(sumOfTwo([12, 14, 18, 9], [1, 2, 3, 2], 29)).toStrictEqual(false);
});