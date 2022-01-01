function findLongestWordLength(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;

    for (let i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
        
    }
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


  //with sort(function(a,b){return a-b})
  //negative a sorted before b
  //positive b sorted before a
  //cero no changes
  function findLongestWordLength2(str) {
    var strSplitSort = str.split(' ');
    var longest = strSplitSort.sort(function(a,b){
        return b.length - a.length;
    });
    return longest[0].length;
  }
  
  findLongestWordLength2("The quick brown fox jumped over the lazy dog");


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
    return a-b; //Si se invierte lo hace de forma descendente
});
console.log(points);
