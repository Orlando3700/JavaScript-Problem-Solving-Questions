// Check if a Number is Even or Odd in JavaScript

// The function isEven(num) checks if a number is even by dividing it
// by 2. If the remainder (num % 2) is 0, the function returns true,
// means the number is even. Otherwise, it returns false.
// console.log(isEven(10)) prints true because 10 is even number.

// Option 1

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(10));

// Option 2

// Using the modulo Operator
// In this method, we use the Modulo Operator (%) to check if a
// number is even or odd. The modulo operator gives the remainder
// when one number is divided by another. To check if a number is
// even or odd:

function isEven(n) {
    return (n % 2 == 0);
}

let n = 101;
isEven(n) ? console.log("Even") : console.log("Odd");

// Option 3

// Using Bitwise & Operator
// Bitwise AND Operator (&). This checks the last bit of a number.
// If the last bit is 1, the number is odd.
// If the last bit is 0, the number is even.

function checkOddOrEven(n) {
    if (n & 1 == 1) {
        return "Number is odd";
    }
    return "Number is even";
}
​
console.log(checkOddOrEven(12));
console.log(checkOddOrEven(121));

// Using Bitwise OR Operator (|)

// The Bitwise OR Operator (|) compares two numbers bit by bit. It
// returns 1 for each bit position where at least one of the bits is
// 1. If both bits are 0, it returns 0. In simple words, the OR
// operator checks two bits and returns 1 if either of the bits is 1.
// If both bits are 0, it returns 0.

function checkOddOrEven(number) {
    return (number | 1) === number ? 'Odd' : 'Even';
}

console.log(checkOddOrEven(14));
console.log(checkOddOrEven(17));

// Using if...else Statement

let num = 4;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Using the Ternary Operator
// The Ternary Operator is a shorthand for the if...else statement.
// It takes three operands: a condition, a result for true, and a
// result for false. This can be used to check whether a number is
// even or odd in one line.

let num = 8;
let result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);





