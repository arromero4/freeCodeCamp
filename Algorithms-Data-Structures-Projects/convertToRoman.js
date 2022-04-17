function convertToRoman(num) {
    //16
    var lookup = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1}

 let roman = ""
    Object.entries(lookup).forEach(([key,elem])=>{
        //console.log(elem)
        while(num>=elem){
            
            roman+=key //"" + X = X
                        //X + V = XV 
                        //XV + I = XVI
            num-=elem //16-10 = 6
                      //6-5= 1
                      //1-1 = 0
  
            console.log(num)
        }
        
    })
    
    return roman;// Returns XVI
   }
convertToRoman(16)