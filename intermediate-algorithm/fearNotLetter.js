/*Missing letters
Find the missing letter in the passed letter range 
and return it.

If all letters are present in the range, 
return undefined. */

function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var len = str.length;
    var start = alphabet.indexOf(str[0]);
    
    for(var i = start; i < start + len; i++){
        //console.log(alphabet[i])
      if(!str.includes(alphabet[i])){
        
        return alphabet[i];
      }
    }
    return undefined;
  }
  
fearNotLetter("abce")


//abce
 function fearNotLetter2(str) {
   
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
      //code = str.charCodeAt(0) = a = 97;
      //code = str.charCodeAt(1) = b = 98;
      //code = str.charCodeAt(2) = c = 99;
      //code = str.charCodeAt(3) = e = 101;
      console.log("code: " + code)
      console.log("iteration: " + i)

        
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */


        //It is checked if code of current character is the expected one 
        //(no characters are skipped) by using the logic - 
        //code of current character = code of first character + number of iterations.
        //str.charCodeAt(0) + 0 = str.charCodeAt(0) = a = 97
        //str.charCodeAt(0) + 1 = str.charCodeAt(1) = b = 98
        //str.charCodeAt(0) + 2 = str.charCodeAt(2) = c = 99
        //str.charCodeAt(0) + 3 = str.charCodeAt(3) = d = 100
    
      if (code !== str.charCodeAt(0) + i) { 


        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  
  // test here
  fearNotLetter2("abce");