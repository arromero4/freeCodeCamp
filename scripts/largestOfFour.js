function largestOfFour(arr) {
    let result = [];

    for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        let largestNumber = arr[arrayIndex][0];
        for (let subArrayIndex = 1; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
    
            if(arr[arrayIndex][subArrayIndex] > largestNumber){
                largestNumber = arr[arrayIndex][subArrayIndex];
            }
        }
        result[arrayIndex] = largestNumber;  
    }

    return console.log(result)
    
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])