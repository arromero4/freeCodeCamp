function bouncer(arr) {
    //para almacenar los valores falsos
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        //si es true
        if(arr[i]){
            //añadelo al nuevo arreglo
            newArray.push(arr[i]);
        }
        
    }
    //se imprime el nuevo arreglo con valores que son true
    return console.log(newArray);
  }
  
//with filter()
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);