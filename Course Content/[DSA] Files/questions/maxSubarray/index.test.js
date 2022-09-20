const maxSubArray = require("./index");

test(" ", () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toStrictEqual(6);
});

test(" ", () => {
  expect(maxSubArray([1])).toStrictEqual(1);
});

test(" ", () => {
  expect(maxSubArray([5,4,-1,7,8])).toStrictEqual(23);
});

test(" ", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0])).toStrictEqual(5);
});

