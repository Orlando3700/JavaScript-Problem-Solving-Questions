// Write a Program to find the minimum value in an array in JavaScript

// Using for loop
// The function findMin() takes an array and finds the smallest value.
// It starts by assuming the first element is the minimum value, then
// loops through the array, comparing each element. If a smaller value
// is found, it updates min. value Finally, it returns the smallest
// value which is -5.

function findMin(arr) {
    // Assume the first element is the minimum
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            // Update min if a smaller value is found
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([6, 18, -5, 9]));