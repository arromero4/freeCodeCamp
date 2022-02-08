
const romanInput = document.getElementById("decimalInput");
const container = document.querySelector('.main')
const parrafo = document.getElementById("parrafo")
let contador = 0
container.addEventListener('click',(e)=>{
    console.log(e.target.classList.contains('button'))

    if(e.target.classList.contains('button')){
        //console.log(romanInput.value )
        parrafo.textContent = convertToRoman(romanInput.value);
    }
    e.stopPropagation();
})

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
   
   