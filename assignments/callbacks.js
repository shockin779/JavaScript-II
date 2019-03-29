// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Question 1:
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, function(arr){
  console.log(`Question 1 - Length of array is: ${arr.length}`);
});

//Question 2:
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
}

last(items, function(lastitem){
  console.log(`Question 2 - The last item in the array is: ${lastitem}`);
});


//Question 3:
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  cb(sum);
}

sumNums(3,7, function(sum){
  console.log(`Question 3 - The sum of the two numbers is: ${sum}`);
});


//Question 4:
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x * y;
  cb(product);
}

multiplyNums(5, 4, function(product){
  console.log(`Question 4 - The product of the two numbers is: ${product}`);
});


//Question 5:
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const isInList = list.includes(item);
  cb(isInList, item);
}

contains('yo-yo', items, function(isInList, item){
  if(isInList) {
    console.log(`Question 5 - ${item} was found in the list!`);
  } else {
    console.log(`Question 5 - ${item} was not found in the list :(`);
  }
});

/* STRETCH PROBLEM */

//Array to use
let names = ['Sean', 'John', 'Nancy', 'John', 'Paul', 'Sean', 'Tim'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  let uniqueArr = new Set(array);
  cb(uniqueArr);
}

removeDuplicates(names, function(arr){
  console.log(arr);
});




//IIFE

(function(){
  console.log(`I am an IIFE and I run as soon as the page loads without being called!`);
})();