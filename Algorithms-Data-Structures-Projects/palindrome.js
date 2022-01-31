function palindrome(str) {
    //let regex = ;
    let pal = str.toLowerCase(str).replace(/[\W_]/g,'').split('').reverse().join('')
    let comparision = str.toLowerCase(str).replace(/[\W_]/g,'').split('').join('')//join without reverse the array
  console.log(pal," ",comparision)
  
  return pal == comparision ? true : false
    
    
  }
  
  console.log(palindrome("race car"))
  console.log(palindrome("not a palindrome"))//False
  console.log(palindrome("A man, a plan, a canal. Panama"))
  console.log(palindrome("never odd or even"))
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  console.log(palindrome("five|\_/|four"))//false
  console.log(palindrome("1 eye for of 1 eye."))//false