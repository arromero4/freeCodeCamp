/*Arguments Optional
Create a function that sums two arguments together. 
If only one argument is provided, then return a 
function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, 
and addTogether(2) should return a function.

Calling this returned function with a single argument 
will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, 
return undefined. */

function addTogether() {
    let args = Array.from(arguments)
    //It has to check if any of the numbers are actual numbers, 
    //otherwise return undefined and stop the program right there.
    if(args.some(elem=> typeof elem !== 'number')){
        return undefined
    }
    //If it has only one argument then it has to return a 
    //function that uses that number and expects another one, to then add it.
    else if(args.length == 1){
        return x=> addTogether(args[0],x)
    }
    else{
        //It has to check if it has one or two arguments passed. 
        //More are ignored.
        return args[0] +args[1]
    }
    

  }
  
  console.log(addTogether(2,3))//It has to add two numbers passed as parameters and return the sum.
  console.log(addTogether(23, 30))
  console.log(addTogether(5)(7))

  console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))

  console.log(addTogether(2, "3"))
