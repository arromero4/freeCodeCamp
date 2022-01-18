
const arr = ["Hello", "World"];
const str = arr.join(" ");
console.log(str)//Hello World.

function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ")
  
    // Only change code above this line
  }
  
console.log(sentensify("May-the-force-be-with-you"));