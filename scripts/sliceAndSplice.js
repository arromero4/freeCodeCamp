function frankenSplice(arr1, arr2, n) {
    
    //copia el arreglo 2 y es lo que se retornará
    let copyArray = arr2.slice()
    console.log(arr1.length)
    //iteración sobre el arreglo 1
    //length tiene 3 posiciones
    for (let i = 0; i < arr1.length; i++) {
        
        //se inserta con splice en la copia del arreglo 2
        copyArray.splice(n,0,arr1[i]);
      //copyArray.splice(1,0,arr1[0]) = [4,1,5,6]
      //n++ = 2

      //copyArray.splice(2,0,arr1[1]) = [4,1,2,5,6]
      //n++ = 3

      //copyArray.splice(3,0,arr1[2]) = [4,1,2,3,5,6]
        n++;
        
    }
    return console.log(copyArray);//[4,1,2,3,5,6]
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);