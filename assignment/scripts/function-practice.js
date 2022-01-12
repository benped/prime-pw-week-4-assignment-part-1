console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'


function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
greeting = 'Ben';
console.log('Test - should say "Hello, Ben!', helloName(greeting));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('This is a test of 1 + 2',addNumbers(1,2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}

console.log('This is a test of multipling 3 * 4 * 5:', multiplyThree(3,4,5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log('Is 3 a postivie number?', isPositive(3));

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1];
}
let fruits = [ 'apple', 'banana', 'kiwi'];

console.log(getLast(fruits));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  let found=false;

  for (i of array) {
//    console.log(`In the for loop i is: ${i}`);
//    console.log(`Value is: ${value}`);
    if (value === i) {
//      console.log('Found true')
      found = true;
    }
  }
  return found;
}

console.log('Looking if kiwi is in the array.',find('kiwi',fruits));
console.log('Looking if cherry is in the array.',find('cherry',fruits));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter){
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let testArray = [-1,4,3,9,-5,0];

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i of array){
    sum+= i;
  }
  return sum;
}

console.log('The sum of all integers in the testArray is: ', sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function positiveNumbers(array){
  let positive = [];
  for (i of array) {
    if (i > 0) {
      positive.push(i);
    }
  }
  return positive;
}

console.log(positiveNumbers(testArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Write a function that takes an integer 'minutes' and converts it to seconds.

function convert(minutes) {
  return minutes * 60;
}

console.log('Testing convert function, 45 minutes is this many seconds');
console.log(convert(45));
