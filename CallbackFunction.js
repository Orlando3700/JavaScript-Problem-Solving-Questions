// Write a Program to use a callback function

// This code defines a greet function that takes two arguments- a
// name and a callback function. It calls the callback with a
// greeting message using the name. When greet('Orlando', message
// => console.log(message)) is executed, it prints "Hello, Orlando!"
// as output.

function greet(name, callback) {
    callback(`Hello, ${name}!`);
}
greet('Orlando', message => console.log(message));