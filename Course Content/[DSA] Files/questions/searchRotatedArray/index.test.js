const search = require("./index");

test(" ", () => {
  expect(search([102, 111, 23, 24, 99], 99)).toStrictEqual(4);
});

test(" ", () => {
  expect(search([12, 19, 29, 1, 2, 4 , 9], 19)).toStrictEqual(1);
});

test(" ", () => {
  expect(search([102, 231, 77, 3, 9, 18, 25, 76], 3)).toStrictEqual(3);
});

test(" ", () => {
  expect(search([21, 40 , 99, 102, 1102, 18, 20], 21)).toStrictEqual(0);
});

test(" ", () => {
  expect(search([0, 1, 2, 3], 2)).toStrictEqual(2);
});

