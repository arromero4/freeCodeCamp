//while

// const ourArray = [];
// let i = 5;

// while (i >= 0) {
//   ourArray.push(i);
//   i--;
  
// }
// console.log(ourArray)


//--------------------------------
//Use a for loop to push the values 1 through 5 onto myArray.
// const myArray = [];

// for (let i = 1; i < 6; i++) {
//   myArray.push(i);
// }

// for (let i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }

// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }

// // for with array
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i]
// }
// console.log(total)

// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return console.log(product);
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]])


// // Setup
// const myArray = [];
// let i = 11;

// // Only change code below this line
// do{
//   myArray.push(i);
//   i++;
// }while (i < 5)

// console.log(myArray)

// Step 1: Call sum([2, 3, 4, 5], 3);
// Step 2: The function goes through the motions and calls sum([2, 3, 4, 5], 2);
//     Step 3: The function goes through the motions and calls sum([2, 3, 4, 5], 1);
//         Step 4: The function goes through the motions and calls sum([2, 3, 4, 5], 0);
//         Step 5: This time n is 0, so the function returns 0.
//     Step 6: The function from step 3 now returns 0 + 2 (so 2).
// Step 7: The function from step 2 now returns 2 + 3 (so 5).
// Step 8: The function from step 1 now returns 5 + 4 (so 9).

//Recursividad
// function sum(arr, n) {
//   // Only change code below this line
  
//   if (n <= 0) {
//     return 0;
//   } else {
//     console.log(arr + " " + n);
//     return sum(arr, n - 1) + arr[n - 1];
    
//   }
//      // Only change code above this line
// }

// console.log(sum([2, 3, 4, 5], 3))

// function rangeOfNumbers(startNum, endNum) {
//     if (startNum - endNum === 0) {
//     return [startNum];
//   } else {
//     const countArray = rangeOfNumbers(startNum, endNum  - 1);
//     countArray.push(endNum);
//     return countArray;
//   }

// };

// console.log(rangeOfNumbers(1, 5))

// rangeOfNumbers(1, 5)
// if (-4 === 0) //startNum - endNum === 0
//   return [startNum];//false
// const countArray = rangeOfNumbers(1, 4);//startNum, endNum  - 1
// countArray.push(5);//endNum
// return countArray; //de regreso [1,2,3,4, 5]

// rangeOfNumbers(1, 4)
// if (-3 === 0) //startNum - endNum === 0
//   return [startNum];//false
// const countArray = rangeOfNumbers(1, 3);//startNum, endNum  - 1
// countArray.push(4);//endNum
// return countArray; //de regreso [1,2,3,4,]

// rangeOfNumbers(1, 3)
// if (-2 === 0) //startNum - endNum === 0
//   return [startNum];//false
// const countArray = rangeOfNumbers(1, 2);//startNum, endNum  - 1
// countArray.push(3);//endNum
// return countArray; //de regreso [1,2,3]

// rangeOfNumbers(1, 2)
// if (-1 === 0) //startNum - endNum === 0
//   return [startNum];//false
// const countArray = rangeOfNumbers(1, 1);//startNum, endNum  - 1
// countArray.push(2);//endNum
// return countArray; //de regreso [1,2]

// rangeOfNumbers(1, 1)
// if (0 === 0) //startNum - endNum === 0
//   return [startNum];//false
// const countArray = rangeOfNumbers(1, 1);//startNum, endNum  - 1
// countArray.push(2);//endNum
// return countArray; //de regreso [1]



// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
  
//   const failureItems = [];
//   for(let x=0; x < arr.length; x++){
//     failureItems.push(`<li class="text-warning">${arr[x]}</li>`);
//   }
  
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList)

// Only change code below this line
// class Thermostat {
//   constructor(Fahrenheit){
//     this.Fahrenheit = Fahrenheit;
//   }

//   get temperature(){
//     return (5/9) * (this.Fahrenheit - 32)
//   }

//   set temperature(celsius){
//     this.Fahrenheit = (celsius * 9.0) / 5 + 32
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// console.log(thermos)
// let temp = thermos.temperature; // 24.44 in Celsius
// console.log(temp)

// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// console.log(temp)

// let nestedArray = [
//   ['deep'],
//  [['deeper'], ['deeper']],
 
//  [
//   [['deepest'], ['deepest']],
 
//   [[['deepest-est?','deeper still']
// ]
// ]
// ]

// ];
// console.log(nestedArray[2][1][0][0][1]);

// let myNestedArray = [
//   // Only change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   ['concat', false, true, 'spread', 'array',['deep']],
//   ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]
//   // Only change code above this line
// ];

// console.log(myNestedArray[3][5][0])


//palabras al reves
// function reverseString(str) {
//   let splitStr = str.split("");
//   let reverseStr = splitStr.reverse();
//   let joinStr = reverseStr.join("");
//   return console.log(joinStr);
// }

// reverseString("hello");

function findLongestWordLength(str) {
  let splitStr = str.split(" ");
  let longest = 0;
  for(var i=0; i < splitStr.length; i++){
    if(splitStr[i].length > longest){
      longest = splitStr[i].length;
    }
  }
  return console.log(longest);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");