function reverseString(str) {
    let reverseStr = str.split('').reverse().join('');
    return reverseStr;
  }
  
  console.log(reverseString("hello"));