//COUNTING SHEEP
//WRITE A RECURSIVE FUNCTION THAT COUNTS HOW MANY SHEEP JUMP over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

console.log('Counting Sheep')
const howManySheep = function (sheep) {
  //base case
  if (sheep === 0) {
    return sheep + "All sheep jumped over the fence"
  }
  //General case
  return howManySheep(sheep - 1) + " " + sheep + " Another sheep jumps over the fence ";
}

let sheep = 3;
console.log(howManySheep(sheep))


// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent.The function returns the value of the base raised to the power of the exponent.Use only exponents greater than or equal to 0(positive numbers)

const powerCalculator = function (base, exponent) {
  if (exponent < 0) {
    return "exponent should be > = 0"
  }
  if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(10, 3))


// Write a function that reverses a string.Take a string as input, reverse the string, and return the new string.

const reverseString = function (string) {
  if (string.length === 1) {
    return string;
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
}

console.log(reverseString("Hello"))

// Calculate the nth triangular number.A triangular number counts the objects that can form an equilateral triangle.The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const nth = function(nDots) {
  if(nDots === 1) {
    return nDots;
  }
  return nDots + nth(nDots - 1);
};
console.log(nth(5));


//Split a string based on a separator, like .split

function stringSplitter(string, array) {
  //Determine if we need to split string
  let stringContainsSpace = string.includes(" ");
  //Find where word ends and get that index
  let findWhereWordEnds = string.indexOf(" ");
  let firstWordOfString = string.substring(0, findWhereWordEnds);
  let remainingPartOfString = string.substring(findWhereWordEnds + 1;);
  //base case
  if(stringContainsSpace === false) {
    array.push(string);
    return array;
  } else {
    array.push(firstWordOfString);
    //call function
    return stringSplitter(remainingPartOfString, array)
  }
}

stringSplitter("Lets get out of here", [])

 const fibonacci = function(num) {
   if (num <= 0) {
     return "Number must be above 0";
   }
   if(num === 1) {
     return 1;
   }
   if(num === 2) {
     return 1;
   }
   return fibonacci(num -1) + fibonacci(num -2);
 };
 console.log(fibonacci(7))

//factoral
let num = 5;
const factoral = function (num) {
  //base case
  if (num === 1) {
    return num;
  }
  //recursive case
  return num * factoral(num - 1)
}
console.log(factoral(num))

//Anagrams
const listAnagram = function(string) {
  for(let i = 0; i < string.length; i++) {
    for(let letter = string[i]) {
      
    }
  }
}