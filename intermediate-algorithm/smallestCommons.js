/*Smallest Common Multiple
Find the smallest common multiple of the provided 
parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will
 not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest 
common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. 
The answer here would be 6. */
//Option 1
function computeSCM(num1, num2) {
    
    let a = Math.min(num1, num2)
    let b = Math.max(num1, num2)
    console.log(a,b)
    for (let m = b; m <= a * b; m +=b) {
        //m=1 m <= 1*1  1+=1=2
        //m=2 m <= 2*1  2+=1=2
        
        if(m  % a === 0){
          //5%1=== 0
           //console.log(m)
            return m
            
            //5
        }
       
    }
}


function smallestCommons(arr) {
    let x = Math.min(...arr)
    let y = Math.max(...arr)

    let scm = 1

    for (let i = x; i <= y; i++) {
        //console.log(scm,i)
        scm = computeSCM(scm,i)
        
        
    }

    return scm
}

//console.log(smallestCommons([1,5]))




function smallestCommons2(arr) {


    //smallest common multiple =6
//3,6,9,12,15,18,...
//1,2,3,4,5,6,7...

    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    //[1,3]
    //[1,2,3]
    const numberDivisors = max - min + 1;
    //numbD = 3-1 +1=3
    //console.log(min,max)

    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
      //1*=1=1 i=1 upp=1
      //1*=2=2 i=2 upp=2
      //2*=3=6 i=3 upp=6

      //console.log(upperBound)
    }

    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        //multiple = 3, 3 <= 6, 3+=3 = 6
        //multiple = 6, 6 <= 6, 6+=6 = 12

        console.log(multiple)
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;//2
      for (let i = min; i <= max; i++) {
                  //1         3

          //1, 1<=3,1
          //2, 2<=3,3
          //3, 3<=3,4

        // Count divisors
        if (multiple % i === 0) {
            //it takes multiple to check with module
            //3%1===0
            //3%2===1//nada
            //3%3===0


             //6%1===0
            //6%2===0
            //6%3===0


          divisorCount += 1;
          //div 0+=1=1
          //div 1+=1=2
          //div 2+=1=3

        }
      }
      if (divisorCount === numberDivisors) {
          //1===3
          //2===3
          //3===3

        return multiple;//6
      }
    }
  }
  
  console.log(smallestCommons2([1,3]))