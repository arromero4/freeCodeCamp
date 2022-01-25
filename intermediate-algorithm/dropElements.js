/*Drop it
Given the array arr, iterate through and remove each element starting 
from the first element (the 0 index) until the function func returns 
true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
    //let result=[]
    for(let i=0; i < arr.length;i++){//recorro el loop 
      //console.log(arr[i],func(arr[i]),arr.slice(i))
      if(func(arr[i])){//si el indice en el array da true
        return arr.slice(i) //retornamos el arreglo a partir de la posicion en la que está
      }
  
    }
   return arr //para primer caso [ 3, 4 ]
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  
  console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
  
  console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
  