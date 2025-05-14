// Using Math.min() and Math.max() Methods 
// The Math object’s Math.min() and Math.max() methods are static
// methods that return the minimum and maximum elements of a given array.
// The spread(…) operator could pass these functions into an array.

// Option 1

let Arr = [50, 60, 20, 10, 40];
let minVal = Math.min(...Arr);
let maxVal = Math.max(...Arr);
console.log("Min Elem is:" + minVal);
console.log("Max Elem is:" + maxVal);

// Option 2

// Iterating through the Array 
// Iterate through the array, initializing the minimum and maximum
// values to Infinity and -Infinity, respectively.

let Arr = [50, 60, 20, 10, 40];
let minVal = Infi;
let maxVal = -Infi;
​
for (let item of Arr) {

// Find min val
  if (item < minVal)
      minVal = item;

// Find max val
   if (item > maxVal)
       maxVal = item;
console.log("Min elem is:" + minVal);
console.log("Min elem is:" + maxVal);
}

// Option 3

// Using a Custom Comparator with Array.sort() Method
// The Array.sort() method sorts the elements of an array in place and
// returns the sorted array..

let Arr = [50, 60, 20, 10, 40];
Arr.sort((a, b) => a - b);
​
let minVal = Arr[0]; 
Arr.sort((a, b) => b - a);
​
let maxVal = Arr[0]; 
 
console.log("Min Elem is:" + minVal);
console.log("Max Elem is:" + maxVal);

