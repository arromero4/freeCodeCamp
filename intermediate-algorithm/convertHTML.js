/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their 
corresponding HTML entities. */

function convertHTML(str) {
    let symbols = /[&,<,>,",']/g;
    let found = str.match(symbols)
    console.log(found)



    for (var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);
        //let charFromCode = String.fromCharCode(code)
  

    }
    
    return str;

  }
  
//convertHTML("Dolce & Gabbana");
   convertHTML("Hamburgers < Pizza < Tacos")
//   convertHTML("Sixty > twelve")
//   convertHTML('Stuff in "quotation marks"')
//   convertHTML("Schindler's List")
//   convertHTML("<>")
//   convertHTML("abc")
