// Write a Program to sort an array in Descending Order in JavaScript?

// Option 1

// The code sorts an array in descending order using a bubble sort
// algorithm. It repeatedly swaps adjacent elements if they are in
// the wrong order then returning the sorted array.

function sortArrayDesc(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));

// Option 2

// Create an Array
const points = [40, 100, 1, 5, 25, 10];

// Sort the Array
points.sort(function(a, b){return b-a});


