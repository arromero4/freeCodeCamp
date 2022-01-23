/*Sum All Primes
A prime number is a whole number greater than 1 
with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is 
only divisible by 1 and 2. In contrast, 
4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all 
prime numbers that are less than or equal to num. */

//first we need to check if the number is Primer or not
function isPrime(num) {
    if(num<=1) { //check if the number value equals to 1 or lower. Return false if it is because 0, 1, and negative numbers are not prime numbers
        return false
    }else{
        for (let i = 2; i < num; i++) {//The for loop will be initialized from the number 2 and will continue to iterate until it’s equal to the number value
            
            if(num % i == 0){
                
            //4%2==0 false
            //4%3==1 true

            
            //5%2==1 true
            //5%3==2 true
            //5%4==1 true

            //6%2==0 false
            //6%3==0 false
            //6%4==2 true
            //6%5==1 true
            
            //7%2==1 true       
            //7%3==1 true     
            //7%4==3 true     
            //7%5==2 true     
            //7%6==1 true     
            
            console.log(i)
           
                //if block that checks whether the number 
                // is divisible by the value of i and return 
                //false if it is. This is because the number
                // must not be divisible by any other number 
                //except one and itself
                return  false
                
            }
            console.log(i)
        }
        //This is because if the for loop finished 
        //without returning false, it means the 
        //number value can’t be divided by any number 
        //between 1 and itself. In other words, 
        //it’s a prime number.
        
        return true
    }
}

function sumPrimes(num) {
    let sum = 0
    for (let i = 2; i < num; i++) {
        if(isPrime(i)){
            sum += i
        }
        
    }

    return sum;
  }
  
console.log(sumPrimes(10));
console.log(isPrime(8))