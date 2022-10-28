console.log("JS PROMISES");
console.log("-------------");

const emailRef = document.querySelector(".email");
const nameRef = document.querySelector(".name");
const subRef = document.querySelector(".sub");

console.log(
  `a. Then Method: 
  - Uses the .then() method on the fetched API.
  - Use '.json()' method to breakdown the data fetched into understandable information. 
        N:B - USE IT ONLY WHEN TALKING TO A BACKEND - NOT WHILE HAVING CREATED A PROMISE YOURSELF IN YOUR JS FILE`
);
//Then Method:
fetch("https://jsonplaceholder.typicode.com/users/1") //fetch the promise
  .then((response) => {
    // Returning jibberish data as the promise
    return response.json();
  })
  .then((data) => {
    // unlocking the promise and making it compatible with the front end (making sense of the data - that comes in an object format)
    emailRef.innerHTML = data.email;
  });

console.log(
  `a. Async / Await Method: 
    - Uses the 'await' method on the fetched API.
    - Use '.json()' method to breakdown the data fetched into understandable information.`
);
// Async / Await Method
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  nameRef.innerHTML = data.name;
}
main();

// Real FES Scenario: Fetching user subscription status
// ......
function getSubscriptionStatus() {
  //Creating a new promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //to mock the backend fetch
      resolve("VIP");
    }, 2000);
  });
}

console.log("");
console.log("EXERCISE:");
console.log("-------------");
console.log(
  `1. Create a function called 'getVideo'
  2. Accept a parameter called 'subStatus'
  3. Return a new 'Promise' inside of the function that:
  - if 'VIP' resolve 'show video'
  - if 'FREE' resolve 'show trailer' 
  - otherwise reject 'no video'
  4. console.log the result of getVideo() in main()`
);

function getVideo(subStatus) {
  return new Promise((resolve, reject) => {
    if (subStatus === "VIP") {
      resolve("show video");
    } else if (subStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main1() {
  const response1 = await getSubscriptionStatus();
  subRef.innerHTML = response1;
  console.log(await getVideo(response1));
}

main1();