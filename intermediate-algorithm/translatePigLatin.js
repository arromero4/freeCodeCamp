/*Pig Latin
Pig Latin is a way of altering English Words. 
The rules are as follows:

- If a word begins with a consonant, 
  take the first consonant or consonant cluster, 
  move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

 */

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/; //[^aeiou] things That Will Not Be Matched
                                 //^[^aeiou] things That Will Not Be Matched at the beginning
    let myConsonants = str.match(consonantRegex);
     console.log(myConsonants)
    return myConsonants !== null
            //if consonant: is not equal and not the same type as null returns true
            //if vowel: is null same type and equal then returns false
      ? str
          .replace(consonantRegex, "")//deletes the consonant 
          .concat(myConsonants)//concats the consonant at the end
          .concat("ay")//adds "ay" at the end
      : str.concat("way");//if starts with a vowel then just add "way"
  }
//   console.log(translatePigLatin("consonant"));
//   console.log(translatePigLatin("paragraphs"));
//   console.log(translatePigLatin("glove"));
//   console.log(translatePigLatin("algorithm"));
   console.log(translatePigLatin("eight"))

























//   let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou^0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex);
// console.log(result)//[' ', 'b', 'l','n', 'd', ' ','m', 'c', '.']


// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// console.log(firstRegex.test(firstString));

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;

// console.log(testStr.match(ourRegex))