const containsDuplicate = require("./index");

test(" ", () => {
  expect(containsDuplicate([1, 2, 4 , 9])).toStrictEqual(false);
});

test(" ", () => {
  expect(containsDuplicate([2, 2, 8 , 19])).toStrictEqual(true);
});

test(" ", () => {
  expect(containsDuplicate([1, 2, 9, 4 , 9])).toStrictEqual(true);
});

test(" ", () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toStrictEqual(true);
});


containsDuplicate([1, 2, 4 , 9]) // Expected output: false
containsDuplicate([2, 2, 8 , 19]) // Expected output: true
containsDuplicate([1, 2, 9, 4 , 9]) // Expected output: true