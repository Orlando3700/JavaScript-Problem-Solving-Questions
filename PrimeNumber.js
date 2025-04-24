// Write a Program to check if a number is prime or not

// The isPrime() function checks if a number num is prime. It
// returns false for numbers less than or equal to 1. It loops
// starts from 2 to num - 1, checking if num is divisible by any
// number in that range. If it is, it returns false otherwise, it
// returns true.

function isPrime(num) {
	if (num <= 1)
	return false;
for (let i = 2; i < num; i++)
{
	if (num % i === 0)
		return false;
	}
	return true;
}

console.log(isPrime(7));