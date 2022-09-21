const stocks = require("./index");

test(" ", () => {
  expect(stocks([7,1,5,3,6,4])).toStrictEqual(5);
});

test(" ", () => {
  expect(stocks([1, 8, 3, 4])).toStrictEqual(7);
});

test(" ", () => {
  expect(stocks([2, 9, 18, 9, 2])).toStrictEqual(16);
});

test(" ", () => {
  expect(stocks([9, 2, 4, 8, 9, 13, 2])).toStrictEqual(11);
});

stocks([7,1,5,3,6,4]) // Expected output: 5
stocks([1, 8, 3, 4]) // Expected output: 7
stocks([2, 9, 18, 9, 2]) // Expected output: 16