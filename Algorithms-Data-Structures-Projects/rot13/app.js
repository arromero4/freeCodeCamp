/*Caesars Cipher
One of the simplest and most widely known 
ciphers is a Caesar cipher, also known as 
a shift cipher. In a shift cipher the meanings 
of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, 
where the values of the letters are shifted by 
13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded 
string as input and returns a decoded string.

All letters will be uppercase. 
Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), 
but do pass them on. */

// const inputText = document.getElementById("inputText");
// const container = document.querySelector('.main')
// const modal = document.querySelector('.modal-body')
// const parrafo = document.getElementById("parrafo")
// let contador = 0

// container.addEventListener('click',(e)=>{
//     console.log(e.target.classList.contains('button'))

//     if(e.target.classList.contains('button')){
//         //console.log(inputText.value )
//         parrafo.textContent = rot13(inputText.value);
//     }
//     e.stopPropagation();
// })

$("#button").click(function () {

  var name = $("#inputText").val();
  var str = "Your code is: "
    + rot13(name);
  $("#modal_body").html(str);
  

});


function rot13(str) {
//F  = 70 R = 82  E = 69
//L = 76 O = 79 V = 86
  let arrStr = Array.from(str.toUpperCase())
  const regex = /[A-Za-z]/g;
arrStr.forEach((item, index)=> {
    if(item.match(regex)){
    let newCipher = (item.charCodeAt(0)-65+13)%26+65
    let newRot = String.fromCharCode(newCipher)
    arrStr[index] = newRot
    
    }
})

 

  return arrStr.join('');
}
//console.log(rot13("SERR YBIR?"))