function repeatStringNumTimes(str, num) {
  var accumulated = "";
  while (num > 0) {
    accumulated += str
    num--
  }
  return console.log(accumulated);
}

repeatStringNumTimes("abc", 3);

//using recursion
function repeatStringNumTimes2(str, num) {
  if(num < 1){
    return "";
  }else{
    return str + repeatStringNumTimes2(str, num -1)
  }
}

console.log(repeatStringNumTimes2("abc", 3));