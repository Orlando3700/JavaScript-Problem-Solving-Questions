// Write a Program to print the frequency of elements in an array?

// The frequency function counts how many times each number appears
// in an array. It creates an empty object freq, iterates through
// the array, and either increments the count for existing numbers
// or adds new numbers with a count of 1. Finally, it returns the
// freq object with the counts.

function frequency(arr) {
    const freq = {};
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]] += 1;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

console.log(frequency([1, 1, 2, 3, 3, 4]));

// Using a Loop and Counter

// You simply loop through the array and count how many times the
// item appears.

const frequency = (arr, item) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }
    return count;
};

const a = [1, 2, 3, 2, 1, 2, 3, 1];
console.log(frequency(a, 2));

// Using filter() Method

// You can filter the array to only include occurrences of the
// target element and then return the length of the filtered array.

const frequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const a = [1, 2, 3, 2, 1, 2, 3, 1];
console.log(frequency(a, 2));


