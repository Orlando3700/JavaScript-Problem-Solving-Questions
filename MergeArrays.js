// Write a Program to merge two arrays in JavaScript?

// The mergeArrays function combines two arrays, arr1 and arr2, by
// using the concat method, which adds all elements of arr2 to the
// end of arr1. The function returns the merged array. In the given
// code [5, 6] and [7, 8] combine to form [5, 6, 7, 8].

// Option 1

function mergeArrays(arr1, arr2) {
    // this method merges all the elements 
    // of arr2 at the end of arr1.
    return arr1.concat(arr2);
}

console.log(mergeArrays([5, 6], [7, 8]));

// Option 2

// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);