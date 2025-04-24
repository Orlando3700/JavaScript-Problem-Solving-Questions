// This program checks whether a string is a palindrome

// A palindrome is a word that reads the same word from forward
// and backward. This ignores spaces and capitalization.

function isPalindrome(str) {
	const reversed = str.split("").reverse().join("");
	return str == reversed;
}

console.log(isPalindrome("Orlando"));
console.log(isPalindrome("OFO"));