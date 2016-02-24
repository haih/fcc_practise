function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var array1 = arr.filter(function(item){
    
      return item;
    
  });
  console.log(array1);
  
}

bouncer([7,9,undefined,NaN, "ate", "", false]);
