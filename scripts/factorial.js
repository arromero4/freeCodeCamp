/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/
 //using Recursion
function factorialize(num) {
   
    if(num < 1){
        return 1
    }else{
        return num * factorialize(num -1)
    }
  }
    console.log(factorialize(5));

//using ternary
function factorialTernary(num){
    return num == 0 || num == 1 ? 1 : num * factorialTernary(num-1);
}
    console.log(factorialTernary(5));


//using for
function factorialLoop(num){
    if(num === 0 || num === 1) return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i
    }
    return num;
}

console.log(factorialLoop(5));

//using for
function factorialLoop2(num){
    let fact =1;
    for (var i = 1; i <= num; i++) {
        fact *= i
    }
    return fact;
}

console.log(factorialLoop2(5));