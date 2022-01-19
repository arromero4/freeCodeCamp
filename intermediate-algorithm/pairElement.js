function pairElement(str) {
    var paired = [];//stores the array and the new arr
    
    var search = char =>{//iterates with each character from the array
        //and push into the paired array
        switch(char){
            case "A":
                paired.push(["A","T"])
                break;
            case "T":
                paired.push(["T","A"])
                break;
            case "C":
                paired.push(["C","G"])
                break;
            case "G":
                paired.push(["G","C"])
                break;               
        }
    
    }

    //loops through the input
    for (let i = 0; i < str.length; i++) {
        search(str[i]);//use the function search to iterates
        
    }


    return console.log(paired);
  }
  
  pairElement("GCG");
  pairElement("ATCGA");
  pairElement("TTGAG");
  pairElement("CTCTA");