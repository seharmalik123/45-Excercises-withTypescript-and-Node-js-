"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defining Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Test for Equality and Inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\n Is apple is not equal to apple?");
console.log(apple != "apple");
// Test for Lower Case Function
console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Tests 
//Equal to:
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
//Not Equal to:
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than:
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
//Less than:
console.log("\n Is twenty is less than ten");
console.log(twenty < 10);
// Greater than or equal to:
console.log("\n ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or equal to:
console.log("\n twenty is less than or equal to ten");
console.log(twenty <= 10);
//Tests using "AND" "OR" operators:
//Using && (AND) operator:
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equals to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using || (OR) operator:
console.log("\n twenty is greater than 50 OR twenty is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50 OR twenty is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is include an array:
console.log("\n Is orange is include in my fruits array?");
console.log(fruits.includes("orange"));
//Not include:
console.log("\n Is orange is not include in my fruits array?");
console.log(!fruits.includes("orange"));
