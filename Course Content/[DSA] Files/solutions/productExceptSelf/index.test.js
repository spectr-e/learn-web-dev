const productExceptSelf = require("./index");

test(" ", () => {
  expect(productExceptSelf([1, 2, 3 , 4])).toStrictEqual([24, 12, 8, 6]);
});

test(" ", () => {
  expect(productExceptSelf([3, 2, 6 , 1])).toStrictEqual([ 12, 18, 6, 36 ]);
});

test(" ", () => {
  expect(productExceptSelf([10, 1, 5 , 2])).toStrictEqual([ 10, 100, 20, 50 ]);
});

test(" ", () => {
  expect(productExceptSelf([7, 8, 9, 2])).toStrictEqual([144,126,112,504]);
});

