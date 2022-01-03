//with splice
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    console.log(arr.length)//4
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
      //newArr.push(arr.splice(0, 2))=>newArr[["a", "b"]]
      //arr["c","d"]
      //newArr.push(arr.splice(0, 2))=>newArr[["a", "b"],[c", "d"]]
      //arr[]
    }
    return console.log(newArr);
  }


  //with slice
  function chunkArrayInGroups(arr, size) {
    let newArr2 = [];//para guardar el nuevo arreglo
    console.log(arr.length)//4
    //iterar hasta que i sea menor que 4
    //incrementa por "size"
    for (let i = 0; i < arr.length; i+=size) {

        newArr2.push(arr.slice(i,i+size));
        //newArr.push(arr.slice(0,0+2))=>newArr[["a", "b"]]
        //i=0+2=2
       //newArr.push(arr.slice(2,2+2))=>newArr[["a", "b"],["c", "d"]]
       //i=2+2=4

    }
    return console.log(newArr2);
  }

  chunkArrayInGroups(["a", "b", "c", "d"], 2);