function mutation(arr) {
    //Return true if the string in the first element of 
    //the array contains all of the letters of 
    //the string in the second element of the array.
    
    //el primer elemento debe contener todo lo del
    //segundo elemento
    let firstElement = arr[0].toLowerCase();

    //segunda posicion a minusculas
    //segunda posicion debe tener lo del primera posicion
    let secondElement = arr[1].toLowerCase();

    
    
    for (let i = 0; i < secondElement.length; i++) {
        if(firstElement.indexOf(secondElement[i]) < 0){
            return console.log(false)
        }
        
    }
    return console.log(true);
  }
  
  mutation(["hello", "hey"]);
  mutation(["floor", "for"])
  mutation(["hello", "neo"])
  mutation(["Noel", "Ole"])