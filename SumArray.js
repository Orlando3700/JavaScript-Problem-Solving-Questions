// Write a Program to find a sum of an array

// The sumArray function takes an array arr as input and initializes
// a variable sum to 0. It loops through each element of the array,
// adding each element's value to sum. Finally, it returns the total
// sum which is 33.

function sumArray(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sumArray([15, 6, 10, 2]));