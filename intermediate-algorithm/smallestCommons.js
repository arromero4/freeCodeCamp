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
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;

    console.log(min,max)

    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
      //1*=1=1 i=1 upp=1
      //1*=2=2 i=2 upp=2
      //2*=3=6 i=3 upp=6
      //6*=4=24 i=4 upp=24
      //24*=5=120 i=5 upp=120
      //console.log(upperBound)
    }

    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        //multiple = 5, 5 <= 120, 5+=5 = 10
        //multiple = 10, 10 <= 120, 10+=5 = 15
        //multiple = 15, 15 <= 120, 15+=5 = 20
        //multiple = 20, 20 <= 120, 20+=5 = 25
        //multiple = 25, 25 <= 120, 25+=5 = 30
        //multiple = 30, 30 <= 120, 30+=5 = 35
        //multiple = 35, 35 <= 120, 35+=5 = 40
        //multiple = 40, 40 <= 120, 40+=5 = 45
        //multiple = 45, 45 <= 120, 45+=5 = 50
        //multiple = 50, 50 <= 120, 50+=5 = 55
        //multiple = 55, 55 <= 120, 55+=5 = 60
        //multiple = 60, 60 <= 120, 60+=5 = 65
        console.log(multiple)
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;//2
      for (let i = min; i <= max; i++) {
                  //1         5

          //1, 1<=5,1
          //1, 1<=5,2
          //1, 1<=5,3
          //1, 1<=5,4
          //1, 1<=5,5
        // Count divisors
        if (multiple % i === 0) {
            //it takes multiple to check with module
            //10%1===0
            //10%2===0//nada
            //10%3===2
            //10%4===1
            //10%5===0

             //15%1===0
            //15%2===0//nada
            //15%3===2
            //15%4===3
            //15%5===0
            //and so on with multiple

             //60%1===0
            //60%2===0//nada
            //60%3===2
            //60%4===3
            //60%5===0
          divisorCount += 1;
          //div 0+=1=1
          //div 1+=1=2
          //div 2+=1=3
          //div 3+=1=4
          //div 4+=1=5
        }
      }
      if (divisorCount === numberDivisors) {
          //1===5
          //1===5
          //2===5
          //3===5
          //4===5
          //5===5
        return multiple;//60
      }
    }
  }
  
  console.log(smallestCommons2([1,5]))