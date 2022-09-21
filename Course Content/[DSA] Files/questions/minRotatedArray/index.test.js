const findMinimum = require("./index");

test(" ", () => {
  expect(findMinimum([102, 111, 23, 24, 99])).toStrictEqual(23);
});

test(" ", () => {
  expect(findMinimum([12, 19, 29, 1, 2, 4 , 9])).toStrictEqual(1);
});

test(" ", () => {
  expect(findMinimum([102, 231, 77, 3, 9, 18, 25, 76])).toStrictEqual(3);
});

test(" ", () => {
  expect(findMinimum([21, 40 , 99, 102, 1102, 18, 20])).toStrictEqual(18);
});

test(" ", () => {
  expect(findMinimum([0, 1, 2, 3])).toStrictEqual(0);
});

