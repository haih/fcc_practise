function largestOfFour(arr) {
  var arrLarge = new Array(4);
  var maxNumb = 0;
  for(var i =0;i < arr.length; i++){
    for(var j=0;j < arr[i].length;j++){
      if( arr[i][j] > maxNumb ){
        maxNumb = arr[i][j];
      }    
    }
    arrLarge.push(maxNumb);
  }
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
