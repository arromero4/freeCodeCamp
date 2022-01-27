/*Everything Be True
Check if the predicate (second argument) is 
truthy on all elements of a collection (first argument).

In other words, you are given an array collection of 
objects. The predicate pre will be an object property 
and you need to return true if its value is truthy. 
Otherwise, return false.

In JavaScript, truthy values are values that translate 
to true when evaluated in a Boolean context.

Remember, you can access object properties through 
either dot notation or [] notation. */

function truthCheck(collection, pre) {

    return collection.every(elem=>{
    console.log(Boolean(elem[pre]))
      //return elem.hasOwnProperty(pre)&&Boolean(elem[pre])
    }) 
  }

  truthCheck([
      {"user": "Tinky-Winky", "sex": "male"}, //true true 
      {"user": "Dipsy", "sex": "male"}, //true true 
      {"user": "Laa-Laa", "sex": "female"}, // true true
      {"user": "Po", "sex": "female"}//true true
    ], "sex") //should return true.

    truthCheck([
        {"user": "Tinky-Winky", "sex": "male"}, //true true
        {"user": "Dipsy"}, //false 
        {"user": "Laa-Laa", "sex": "female"}, // true tue
        {"user": "Po", "sex": "female"}//true true
    ], "sex") //should return false.


    truthCheck([
        {"user": "Tinky-Winky", "sex": "male", "age": 0}, //true false
        {"user": "Dipsy", "sex": "male", "age": 3}, //true true
        {"user": "Laa-Laa", "sex": "female", "age": 5},  //true true
        {"user": "Po", "sex": "female", "age": 4}//true true
    ], "age") //should return false.

    truthCheck([{"single": "double"}, //true true
    {"single": undefined} //true false
], "single")//should return false.