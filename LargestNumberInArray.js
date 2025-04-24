// Program to find the largest number in an array

// Using a For loop:
// The code defines a function findLargest that finds the largest
// number in an array. It starts by assuming the first element is the
// largest, then iterates through the array. If a larger number is
// found, it updates the largest value. Finally, it returns the
// largest number which is 100.
function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));

// Using the spread operator (...) or Math.max:
// The findLargest function uses Math.max() to find the largest
// number in an array. The spread operator (...arr) expands the
// array elements so Math.max() can evaluate each value.
function findLargest(arr) {
	// Math.max() is used to find the largest number
	return Math.max(...arr);
}

console.log(findLargest([99, 5, 3, 100, 1]));