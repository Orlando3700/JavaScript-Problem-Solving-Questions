// In JavaScript, finding the union of multiple arrays means combining
// their elements into a single array with only unique values. Here
// are several methods to compute the union of JavaScript Arrays

// Option 1

const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

// Union of arrays
const union = [...new Set([...a1, ...a2])];
console.log(union);

// Option 2

// Using push() Method
// You can also use push() with the Set for deduplication, you can
// add all elements to one array and then convert it to a Set to
// remove duplicates.

const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

// Combine arrays and create union
a1.push(...a2);
const union = [...new Set(a1)];
console.log(union);

// Option 3
// Using concat() and filter()
// We can use concat() to merge arrays, and filter() with indexOf()
// can be used to remove duplicates. This method is used for custom
// filtering.

const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

// Concatenate and filter out duplicates
const union = a1.concat(a2).filter((value, index, arr) 
    => arr.indexOf(value) === index);
console.log(union);

// Option 4
// Using reduce() and includes()
// With reduce() and includes(), you can manually create the union
// array without having any duplicates.

const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

// Reduce to create union
const u = a1.concat(a2).reduce((acc, value) => {
    if (!acc.includes(value)) acc.push(value);
    return acc;
}, []);
console.log(u);

// Option 5
// Using Lodash _.union()
// Lodash provides the _.union() method, which computes the union of
// arrays with all elements are unique. This method is efficient and
// simple to use if Lodash is included in your project.

// Lodash
const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

const u = _.union(a1, a2);
console.log(u); 

// Option 6
// Using Underscore.js _.union()
// Like Lodash, Underscore.js also provides a _.union() function.
// This is another quick option if your project uses Underscore.js.

//Underscore.js
const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

const union = _.union(a1, a2);
console.log(union);

