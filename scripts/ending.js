function confirmEnding(str, target) {

    let ending = new RegExp(target+'$','i');
    return console.log(ending.test(str));
  }
  
  confirmEnding("Bastian", "n");