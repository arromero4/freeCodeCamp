/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their 
corresponding HTML entities. */

//Option 1
function convertHTML(str) {
    //let symbols = /[&,<,>,",']/g;
    //let found = str.match(symbols)
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

    let arr = str.split("")
                 .map(elem=>{
                  if(entities.hasOwnProperty(elem)){
                    return entities[elem]
                  }else{
                    return elem
                  }
                 })


    return arr.join("");

  }

  


  
  // console.log(convertHTML("Dolce & Gabbana"));
  // console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  // console.log(convertHTML("Sixty > twelve"));
  // console.log(convertHTML('Stuff in "quotation marks"'));
  // console.log(convertHTML("Schindler's List"));
  // console.log(convertHTML("<>"));
  // console.log(convertHTML("abc"));
//Option 2
  function convertHTML2(str) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

    return str.split("").map(elem=>entities[elem]||elem).join("");
  }
  
  //  console.log(convertHTML2("Dolce & Gabbana"));
  //  console.log(convertHTML2("Hamburgers < Pizza < Tacos"));

   //Option 3
   function convertHTML3(str) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

    return str.replace(/([&<>\"'])/g, match => entities[match]);
  }
  
   console.log(convertHTML3("Dolce & Gabbana"));
   console.log(convertHTML3("Hamburgers < Pizza < Tacos"));