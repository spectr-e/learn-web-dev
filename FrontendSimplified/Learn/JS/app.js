// console.log('Practice '+ 'Like a Boss')
// let str = "Josiah"
// console.log(str[0])
// console.log(str.length)
// console.log(str[str.length-1])
// let celcius = 10;

let cash = 45;
let price = 40;

if (cash > price) {
  console.log(`you paid extra - here's ${cash - price} dollars of change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enough money - you still owe ${price - cash} dollars`);
}

// COMPARISON OPERATORS
/**
 * == Equal values
 * === Equal values and types
 * != Not equal
 * !== Not equal value and equal type
 * < Less than
 * > Greater than
 * <= Less than or equal to
 * >= Greater than or equal to
 */

// lOGICAL OPERATORS
/**
 * && - Checks if the left and right side of the comparison is true
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false & false --> false
 */

let isStoreOpen = true;
if (cash >= price && isStoreOpen === true) {
  console.log("print the receipt");
}

/**
 * || - checks if left or right side of the comparison is true
 * true || true --> true
 * false || false --> false
 * true || false --> true
 * false || true --> true
 */

// FALSY VALUES (opp. Truthy values)
/**
 * considered as 'false' when converted to a boolean
 * e.g.
 * - undefined
 * - null
 * - NaN
 * - 0
 * - "" (empty strings)
 * - false
 */

// TERNARY OPERATORS
/**
 * - It is a shortcut for an if else condition
 * isObese ? 'unhealthy':'healthy'
 * subscribed? 'show video':'hide video'
 */

let hot = true;
hot ? console.log("weather is hot outside") : console.log("weather is cold");
let subscribed = false;
let loggedIn = true;

let str = subscribed && loggedIn ? "show the video" : "hide the video";
console.log(str);

// Exercise: Print out 'give receipt' if cash is more than the price and if the store is open. Print out 'do not give receipt' if cash is less than price or if the store is not open.

let diff = cash >= price;

let decide = isStoreOpen && diff ? "give receipt" : "do not give receipt";
console.log(decide);

// lOOPS
/** N:B Do not repeat yourself!
 *let count = 1
 *while (count <= 100) {
 *    console.log(count)
 *    count = count + 1
 *}
 *
 *for (let i = 0; i <= 100; i++) {
 *console.log(i);
 *}
 */

//THE FIZZBUZZ Exercise
/** Part A
 * Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print 'Frontend'
 * If the number is divisble by 5, print 'Simplified'
 * If the number is divisible by 3,5, print 'Frontend Simplified'
 * If the number is NOT divisble by 3,5, print the number
 */

for (i = 0; i <= 20; ++i) {
  let three = i % 3;
  let five = i % 5;
  let thfv = i % 15;
  if (!thfv) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (!five) {
    console.log(`${i} -> Simplified`);
  } else if (!three) {
    console.log(`${i} -> Frontend `);
  } else {
    console.log(`${i} -> ${i}`);
  }
}

/** Part B
 * Print out every character from the string:
 * 'Frontend Simplified'
 * 
 * @example
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */

let strg = "Frontend Simplified"
for (i in strg) {
    console.log(strg[i]);
}

//FUNCTIONS
/**
 * DRY - Don't Repeat Yourself
 */

//Function defination - parameters
function welcomePerson(person) {
    console.log(`Welcome, ${person}`)
}

function fn(a,b) {
    return a + b;
}

//Function calling - arguements
welcomePerson('Josiah')
console.log(fn(5,16))

// Exercise:
/**
 * Create a function that converts Celcius to Fahrenheit
 * Formula: F = C x 1.8 + 32
 * @example
 * convCtoF(0) - 32
 * convCtoF(10) -50
 */

function convCtoF(temp) {
    F = temp * 1.8 + 32
    return F
}

console.log(convCtoF(10))