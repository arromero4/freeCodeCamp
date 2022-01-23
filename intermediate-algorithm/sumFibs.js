/*Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all 
odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci 
sequence are 1 and 1. 
Every additional number in the sequence is the sum of 
the two previous numbers. 
The first six numbers of the Fibonacci 
sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all 
odd Fibonacci numbers less than or equal 
to 10 are 1, 1, 3, and 5. */

//Option 1
function sumFibs(num) {
    let fibSeq = [0,1]
    let sumOddFib = 1
    var counter = iterateUpFib(counter)
    //console.log(counter)

    function iterateUpFib(counter) {
        return fibSeq[fibSeq.length -2] + fibSeq[fibSeq.length-1]
    }
    
    function isOdd(counter) {
        return counter % 2 !== 0
    }


    while (counter <= num) {
        fibSeq.push(counter)

        if(isOdd(counter)){
            sumOddFib += counter
        }
        //console.log(fibSeq)
        counter = iterateUpFib(counter)
    }
    


    return sumOddFib

}
  
//console.log(sumFibs(10))
sumFibs(1000)//should return 1785.
sumFibs(4000000)// should return 4613732.
sumFibs(4) //should return 5.
sumFibs(75024) //should return 60696.
sumFibs(75025) //should return 135721.
  //0,1,1,2,3,5,8,13

  //------------CALL STACK-----------

  //---------------------------------
  //explain how fibonacci works
  function fibo(n) {
      if(n<3) return 1
      return fibo(n-1) + fibo(n-2)
  }
  //console.log(fibo(5))

  //option 
  //non-recursive fibonacci
  function fib(n) {
      if(n < 3) return 1

      let prev=1
      let curr=1

      for (let i = 2; i < n; i++) {
          const next = prev + curr
          prev = curr
          curr = next
          
      }
      return curr
  }

  fib(5)
//---------------------------------

  //option 2 is the same as the 1

  function sumFibs2(num) {
    let fibSeq = [0,1]
    
    let counter = fibSeq[fibSeq.length -2] + fibSeq[fibSeq.length-1]
    //console.log(counter)

    while (counter <= num) {
        fibSeq.push(counter)
        //console.log(fibSeq)
        counter = fibSeq[fibSeq.length -2] + fibSeq[fibSeq.length-1]
    }
    let sumOddFib = 0
    fibSeq.forEach(function(num) {
        if(num % 2 !== 0){
            //console.log(num)
            sumOddFib += num
        }
    })

    return sumOddFib

}
console.log(1 % 2 !== 0)
//Option 3
function sumFibs3(num) {
    let prevNumber = 0;//1 1 2 3 5 8
    let currNumber = 1;//1 2 3 5 8 13
    let result = 0;//1 2 5 10

    while (currNumber <= num) {
       
      if (currNumber % 2 !== 0) {//true,true,false,true,true,false
        result += currNumber;//
        //0+1=1 - currNumber - 1
        //1+1=2 - currNumber - 1
        //2+3=5 - currNumber - 3
        //5+5=10- currNumber - 5
        console.log(result, currNumber)
      }
      currNumber += prevNumber;
      //1+0=1
      //1+1=2
      //2+1=3
      //3+2=5
      //5+3=8
      //8+5=13
      prevNumber = currNumber - prevNumber;
      //1-0=1
      //2-1=1
      //3-1=2
      //5-2=3
      //8-3=5
      //13-5=8
    }
  
    return result;//10
  }

  sumFibs3(10)