// Adds two numbers together
console.log("Q1: Add two numbers");
function addition(a, b) {
  return a + b;
}
console.log(addition(-9, 10));

//Converts hours into seconds
console.log("Q2: Hours to Seconds");
function hrsToSec(hours) {
  return hours * 60 * 60;
}
console.log(hrsToSec(2));

//Calc Area of a Triangle
console.log("Q3: Area of a Triangle");
function areaTriangle(base, height) {
  return 0.5 * base * height;
}
console.log(areaTriangle(3, 2));

// Accepts a string and adds 'Frontend' to the end.
console.log("Q4: Extending a String");
function extendString(str) {
  return str + "Frontend";
}
console.log(extendString("josiah"));

// Returns if sum is greater than 100
console.log(
  "Q5: Returns true or false if sum of two numbers is greater than 100"
);
function greaterHund(a, b) {
  return a + b > 100;
}
console.log(greaterHund(20, 30));

// Given a boolean, return opposite
console.log("Q6: Opposify the given boolean");
function oppBool(bool) {
  return !bool;
}
console.log(oppBool(true));

// Given ANY element, return true if it is not the number 0
console.log("Q7: Given ANY element, return true if it is not the number 0");
function isNotZero(any) {
  return any !== 0;
}
console.log(isNotZero(null));

// Given two numbers, return their remainder when divided by each other
console.log("Q9: What is the remainder?");
function remain(a, b) {
  return a % b;
}
console.log(remain(111, 8));

// Given two numbers, return true if number is odd
console.log("Q10: Is the number odd?");
function isOdd(a) {
  return a % 2 !== 0;
}
console.log(isOdd(10));

//Given a number, retun 1 if even otherwise -1 (booleanInteger)
console.log("Q11: Return 1 if even and -1 if odd");
function booleanInteger(a) {
  return a % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(10));

// Given two strings, if the first is equal to 'LOGGED_IN' and the second string is 'SUBSCRIBED' return true, otherwise, return false
console.log("Q12: Is a user logged in and subscribed?");
function isLoggedInAndSubscribed(login, sub) {
  // tenary operators
  return login === "LOGGED_IN" && sub === "SUBSCRIBED" ? true : false;
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
