// An intersection of two sets means the element which occurs in both
// sets. In mathematical terms, the intersection of two sets is shown
// by A ∩ B. It means all the elements which is common in set A and
// set B should occur in a single array. In javascript, the
// intersection of two sets means getting the common from both sets.

// JavaScript Sets: Set can store any type of value whether primitive or objects.
// JavaScript filter() Method: Create a new array from a given array
// consisting of only those elements from the given array which satisfy a condition set by the argument method. 
// JavaScript set.has() Method: Check whether an element with a specified value exists in a Set or not.

// Option 1

function getIntersection(set1, set2) {
    const ans = new Set();
    for (let i of set2) {
        if (set1.has(i)) {
            ans.add(i);
        }
    }
    return ans;
}
const set1 = new Set([1, 2, 3, 8, 11]);
const set2 = new Set([1, 2, 5, 8]);

const result = getIntersection(set1, set2);
console.log(result);

// Option 2

let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 3, 2]);
let set = new Set([...set1].filter(x => set2.has(x)));
console.log(set);