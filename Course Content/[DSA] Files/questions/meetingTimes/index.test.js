const meetingTimes = require("./index");

test(" ", () => {
  expect(meetingTimes([10, 20], [20, 30])).toStrictEqual(true);
});

test(" ", () => {
  expect(meetingTimes([[10, 20], [11, 30]])).toStrictEqual(false);
});

test(" ", () => {
  expect(meetingTimes([1, 2], [2, 3], [3, 4], [4, 5])).toStrictEqual(true);
});

test(" ", () => {
  expect(meetingTimes([[1, 3], [5, 5], [2, 4], [9, 13]])).toStrictEqual(false);
});

