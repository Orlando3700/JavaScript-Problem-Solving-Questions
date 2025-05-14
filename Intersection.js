// Find the Intersection of Two Arrays in JavaScript?

// In the given code set is used to store a unique values from arr2
// then filter checks each element in arr1 to see if it is also exist
// in the set and keeping only those that matches. The output is an
// array of common elements from both arr1 and arr2.

function arrayIntersection(arr1, arr2) 
{
  // Creates a Set from arr2 and stores it in the variable set2.
  // A Set in JavaScript is a collection of unique values and allows fast lookups using .has().
  // This allows us to efficiently check if an element from arr1 exists in arr2.
  const set2 = new Set(arr2);
  // .filter() is used to create a new array with elements from arr1 that satisfy a condition.
  // The condition here is set2.has(value) — meaning "is this value from arr1 also in set2 (i.e., arr2)?"
  //Only values that return true will be included in the final result.
  return arr1.filter(value => set2.has(value));
}

// console.log(...) prints this result to the console.
console.log(arrayIntersection([5, 6, 7], [6, 7,8 ]));