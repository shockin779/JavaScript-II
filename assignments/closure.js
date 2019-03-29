// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function houseBuilder(bedrooms, bathrooms) {
  let numBedrooms = bedrooms;
  let numBathrooms = bathrooms;

  return function houseDescription(){
    console.log(`This house has ${numBedrooms} bedrooms and ${numBathrooms}.`);
  };
}

//Build a house with a unique number of bedrooms and bathrooms
let myHouse = houseBuilder(4, 2);

//This will log out the number of Bedrooms and bathrooms in the house.
myHouse();





/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
