/*Roman Numeral Converter
Convert the given number into a 
roman numeral.

All roman numerals answers should be provided 
in upper-case.*/

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

<<<<<<< HEAD
    let roman = ""
    Object.entries(lookup).forEach(([key,elem])=>{

        console.log(key,elem)
        while (num >= elem) {//16
            roman+=key//"" + X = X
                      //X + V = XV
                      //XV + I = XVI
            num-=elem//16-10=6
                     //6-5=1
                     //1-1=0
        }
    })
    
    return roman;//XVI
   }
   
console.log(convertToRoman(16))
=======
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
>>>>>>> 1072b0592e08ea0aa0a05092aecd9ed94420a17a
