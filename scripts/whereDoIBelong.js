function getIndexToIns(arr, num) {
    //ordena mediante funcion sor
    arr.sort((a,b) => a-b);
    //[2, 5, 10]
    //console.log(arr);

    //recorre el arreglo ordenado
    for (let i = 0; i < arr.length; i++) {
        //si el valor de la primera posicion es mayor 
        //o igual al numero recibido imprime el valor de i
        
        if(arr[i] >= num){
            //arr[0]=2 >= 15 = false
            //arr[1]=5 >= 15 = false
            //arr[2]=10 >= 15 = false
            return console.log(i);
            //imprime 1
        }
        
    }

    return console.log(arr.length);
  }
  getIndexToIns([2, 5, 10], 15)
  //getIndexToIns([40, 60], 50);