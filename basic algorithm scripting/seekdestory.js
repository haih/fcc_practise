function destroyer(arr) {
  // Remove all the values
  console.log(arr);
  
  var iniarray = arr[0];
  var ret = iniarray.filter(function(item){
    if(item !== arr[1] && item !== arr[2]){
      return item;
    }
  });
  return ret;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
