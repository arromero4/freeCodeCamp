function truncateString(str, num) {
    if(str.length > num){
        return console.log(str.slice(0, num) + "...");
    }else{
        return console.log(str);
    }
    
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);