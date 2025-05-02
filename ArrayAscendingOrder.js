// Write a Program to sort an array in Ascending Order in JavaScript?

// The sortArray function sorts an array in ascending order using
// a nested loop. It compares each element with the others and swaps
// them if they are out of order. After iterating through the array,
// it returns the sorted array.

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([5, 3, 8, 1]));

// Option 2

// Using JS Array.sort() Method- Mostly Used

// Pass the comparator function in array.sort() to sort the array in
// ascending order.

const arr = [ 10, 20, 25, 100 , 40]
arr.sort((a,b) => a - b)
console.log(arr)

// Option 3

// Using Sorting Algorithms

// The sorting algorithms like bubble sort can be used to sort JS
// array in Ascending Order.

const arr = [10, 20, 25, 100, 40];

function bubbleSort(arr) {
	let n = arr.length;

	// Traverse through all array elements
	for (let i = 0; i < n - 1; i++) {
    
		for (let j = 0; j < n - 1 - i; j++) {
			// Swap if element is greater than next index
			if (arr[j] > arr[j + 1]) {
            	[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

console.log(bubbleSort(arr));

// Option 4

// Using Lodash.sortBy() method

// The _.sortBy() method is used to sort the given data. It sort the
// given array in ascending order.

const _ = require('lodash');
const arr = [10, 20, 25, 100, 40];
_.sortBy(arr);
console.log(arr); // [10, 20, 25, 40, 100]


