// Write a Program to find factorial of a number?

// The factorial function calculates the factorial of a given number
// num. It initializes answer to 1, then multiplies it by each integer
// from 2 to num in a loop. Finally, it returns the computed factorial.
// The console.log statement prints the factorial of 7, which is 5040.

function factorial(num) {
	let answer = 1;
	for (let i = 2; i <= num; i++) {
		answer *= i;
	}
	return answer;
}

console.log(factorial(7));

// Using Recursion

// The recursion involves a function that calls itself until it
// reaches a base condition.

function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}
console.log(fact(5)); 