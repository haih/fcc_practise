/*Where do I belong
Return the lowest index at which a value (second argument)
should be inserted into an array (first argument) once it has been sorted.
*/

function where(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr = arr.sort(function(a,b){
  	return a-b;
  });
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
  	if(arr[i]==num ){
  	  return i;
  	} 
  }
}

//where([3,10, 5], 3);


console.log(where([3,10, 5], 3));