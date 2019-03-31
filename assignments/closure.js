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
const counter = (count) => {
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    count++;
    return count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const counter1 = counter(0);
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = counter(100);
console.log(counter2());
console.log(counter2());
console.log(counter2());

const counter3 = counter(700);
console.log(counter3());
console.log(counter3());
console.log(counter3());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (counter) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  return {
    counter: counter,
    increment: function() {
      counter++;
      return counter;
    },
    decrement: function() {
      counter--;
      return counter;
    }
  };
};

let objCounter1 = counterFactory(0);
let objCounter2 = counterFactory(100);
let objCounter3 = counterFactory(400);

console.log(objCounter1.increment());
console.log(objCounter1.increment());
console.log(objCounter1.decrement());
console.log(objCounter2.increment());
console.log(objCounter2.increment());
console.log(objCounter2.increment());
console.log(objCounter3.decrement());
console.log(objCounter3.decrement());
console.log(objCounter3.increment());