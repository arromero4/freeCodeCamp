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
console.log(rot13("SERR YBIR?"))