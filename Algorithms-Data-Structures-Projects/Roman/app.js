
const romanInput = document.getElementById("decimalInput");
const romanButton = document.getElementById("button");

romanButton.addEventListener("click",(e)=>{
    
    romanInput.value = convertToRoman(e.target.value);
    document.getElementById("demo").innerHTML = romanInput.value
  });
 

function convertToRoman(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}

    let roman = ""
    Object.entries(lookup).forEach(([key,elem])=>{

        //console.log(key,elem)
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
   
   