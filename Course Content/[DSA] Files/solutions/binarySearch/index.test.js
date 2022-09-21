const binarySearch = require("./index");

test(" ", () => {
  expect(binarySearch([1,23, 24, 99], 1)).toStrictEqual(0);
});

test(" ", () => {
  expect(binarySearch([1, 2, 4 , 9], 2)).toStrictEqual(1);
});

test(" ", () => {
  expect(binarySearch([1, 2, 3, 9, 18, 25, 76], 9)).toStrictEqual(3);
});

test(" ", () => {
  expect(binarySearch([1, 21, 40 , 99, 102, 1102], 102)).toStrictEqual(4);
});
