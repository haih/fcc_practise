/*
You will be provided with an initial array (the first argument in the destroyer function),
 followed by one or more arguments. Remove all elements from the initial array that are of 
 the same value as these arguments.
*/
function destroyer(arr,param1,param2,param3) {
  // Remove all the values
  var iniarray = arr;
  var ret = iniarray.filter(function(item){
    if(item !== param1 && item !== param2 && item !== param3){
      return item;
    }
  });
  return ret;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
