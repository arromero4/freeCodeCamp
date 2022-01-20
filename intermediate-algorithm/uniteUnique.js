/*Sorted Union
Write a function that takes two or more arrays and 
returns a new array of unique values in the order 
of the original provided arrays.

In other words, all values present from all arrays 
should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original 
order, but the final array should not be sorted 
in numerical order.

Check the assertion tests for examples.
*/
//Option 1
function uniteUnique(arr) {
    let finalCollection = []
    let values =  Object.values(arguments);

    for (let i = 0; i < values.length; i++) {
        
        for (let j = 0; j < values[i].length; j++) {
            if(finalCollection.indexOf(values[i][j]) === -1){
                finalCollection.push(values[i][j])
            }
            
        }
        
    }
    
    return finalCollection;
  }
  
  let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  //console.log(result)


  //Option 2
  function uniteUnique2(arr) {
    let unionArr = [];
    let allArr = Array.from(arguments).reduce((arr1,arr2) => arr1.concat(arr2))
    allArr.forEach(element => {
        if(!unionArr.includes(element)){
            unionArr.push(element)
        }
    });
    return unionArr
  }
  
  let result2 = uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  //console.log(result2)

    //Option 3
    function uniteUnique3(arr) {
        let unionArr = [];
        let allArr = Array.from(arguments)
        //.reduce((arr1,arr2) => arr1.concat(arr2))

        //console.log(allArr)

        allArr.map(element => {
            if(!unionArr.includes(element)){
                unionArr.push(element)
            }
        });
        return unionArr
      }
      
      let result3 = uniteUnique3([1, 3, 2], [5, 2, 1, 4], [2, 1]);
      //console.log(result3)

    const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
    //console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]


//Option 3
function uniteUnique4(...arr) {
    let newArr = [].concat(...arr)
    //console.log(newArr)
    return newArr = [...new Set(newArr)]

  }
  
  let result4 = uniteUnique4([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  console.log(result4)