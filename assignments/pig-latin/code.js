// A new method you will probably want to use.
//
// If s is a string:
//
//  s.search(/[aeiou]/) returns the index in s of the first vowel.
//
// For instance
//
//  const s = 'phone';
//
//  s.search(/[aeiou]/) returns 2
//
// The funny syntax /[aeiou]/ is called a "regular expression". We'll learn
// about them in more detail later.
//
// To write the advancedPigLatin function you will want to know about a new
// operator called the "ternary operator". (It's called this because it has
// three operands.)
//
// It looks like:
//
//  booleanValue ? value1 : value2
//
// And it evaluates to value1 is booleanValue is true and value2 if it is false.
//
// For example:
//
//  x === 0 ? "Zero" : "Not zero"
//
// will evaluate to either "Zero" or "Not zero" depending on whether x === 0.
//
// Feel free to play around in the REPL to make sure you understand how this
// operator works.

const myWord = 'Computer';

const myWordVowel = myWord.search(/[aeiou]/);

const pigLatin = (myWord) => {
 return myWord.substring(myWord.search(/[aeiou]/)) + myWord.substring(0, myWord.search(/[aeiou]/)) + 'ay';
}

const advancedPigLatin = (myWord) => {
 return myWord.search(/[aeiou]/) === 0 ? myWord + 'way' : pigLatin(myWord);
}
// Dont really know how to execute pigLatin by itself instead of rewriting code //

