//Steamroller
//Flatten a nested array. 
//You must account for varying levels of nesting.

//Option1

function steamrollArray(arr, flatArr = [] ) {
    
    for (let i = 0; i < arr.length; i++) {
        
        if(Array.isArray(arr[i])){
            
            flatArr = steamrollArray(arr[i],flatArr)
                        
        }else{
            flatArr.push(arr[i])
            
        }
        
    }
    return flatArr;
  }
steamrollArray([1, [2], [3, [[4]]]])
// console.log(steamrollArray([[["a"]], [["b"]]]))
// console.log(steamrollArray([1, [], [3, [[4]]]]))
// console.log(steamrollArray([1, {}, [3, [[4]]]]))


//Option 2

function steamrollArray2(arr) {
    let arrlen = arr.length
    let result = arr.flat(arrlen);
    return result;
  }
  
// console.log(steamrollArray2([1, [2], [3, [[4]]]]))
// console.log(steamrollArray2([[["a"]], [["b"]]]))
// console.log(steamrollArray2([1, [], [3, [[4]]]]))
// console.log(steamrollArray2([1, {}, [3, [[4]]]]))


//Option 3

function steamrollArray3(arr) {
    //console.log([].concat(...arr))
    const flat = [].concat(...arr);
    //[ 1, [2], [3, [[4]]]]

    //[ 1, 2, 3, [ [ 4 ] ] ]
    //[ 1, 2, 3, [ 4 ] ]
    //[ 1, 2, 3, 4 ]
    return flat.some(Array.isArray) ? steamrollArray3(flat) : flat;
    
  }
  
// console.log(steamrollArray3([1, [2], [3, [[4]]]]))
// console.log(steamrollArray3([[["a"]], [["b"]]]))
// console.log(steamrollArray3([1, [], [3, [[4]]]]))
// console.log(steamrollArray3([1, {}, [3, [[4]]]]))
  
  const arr1 = [1,[2],[[3]]]
  const flat2 = [].concat(...arr1);
  //[1,2,[3]]
  //console.log(flat2)


//Option 4

function steamrollArray4(arr,flatArr=[]) {

    arr.forEach(item => {
        //console.log(arr,"<--->",item,"<--->",flatArr)  
      Array.isArray(item) ? steamrollArray4(item, flatArr):flatArr.push(item);

    //[ 1(0), [2](1), [3(2)(0), [(1) [4(0)] ] ] ]
    
    //1=>flatArr[1]

    //[2](1) => 2,[1,2]
    //2 =>flatArr[1,2]

    //[3(2)(0) => 3,[1,2]
    //3 => flatArr[1,2,3]
    
    //[3(2)(1)=> [4],[1,2,3]

   //[3(2)(1)=> 4,[1,2,3]
  //4 => flatArr[1,2,3,4]



    
    });
    return flatArr;
  }

steamrollArray4([1, [2], [3, [[4]]]])
// console.log(steamrollArray4([[["a"]], [["b"]]]))
// console.log(steamrollArray4([1, [], [3, [[4]]]]))


//MDN Example
function flatten(arr) {
    const result = []
    console.log(arr)
    arr.forEach(function(i) {
        //[1(0),
        // 2(1), 
        // 3(2), 
        //[4(3)(0), 
         //5(3)(1), 
             //(2)[6(2)(0), 7(2)(1)], 
         //8(3)(2),
         //9(3)(3)]]
      if (Array.isArray(i)) {

        result.push(...flatten(i))
        //result[1,2,3].push(4) result[1,2,3,4]
        //result[1,2,3,4,5].push(6) result[1,2,3,4,5,6]
        
      } else {

        result.push(i)
        console.log(result)
        //result[1]
        //result[1,2]
        //result[1,2,3]<- 
        //result[1,2,3,4,5]
        //result[1,2,3,4,5,6,7]
        //result[1,2,3,4,5,6,7,8]
        //result[1,2,3,4,5,6,7,8,9]

      }
    })
  
    return result
  }
  
  // Usage
  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
  
  flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]