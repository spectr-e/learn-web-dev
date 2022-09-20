const flatten = require("./index");

test(" ", () => {
  expect(flatten([1, 2, 3, 4, [5]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test(" ", () => {
  expect(flatten([1, 2, [3, [4, [5]]]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test(" ", () => {
  expect(flatten([[1, 2, [3, 4, [5]]]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test(" ", () => {
  expect(flatten([1, [2], [3,[4, [5]]]])).toStrictEqual([1, 2, 3, 4, 5]);
});
