// Write a Program to count the occurrences of a character in a string in JavaScript?

// using split() method
// The countChar() function counts how many times a specified
// character (char) appears in a string (str). It splits the string
// into an array using the character, then returns the length of
// the array (length-1), which gives the count of the character.

function countChar(str, char) 
{
  return str.split(char).length - 1;
}

console.log(countChar('OrlandoFernand', 'd'));

// Using a for loop
// The countChar() function counts how many times a given character
// (char) appears in a given string (str). It initializes a counter
// (count) to zero, iterates through each character in the string,
// increments the counter when it finds a match and returns the total
// count.

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar('OrlandoFernand', 'd'));

