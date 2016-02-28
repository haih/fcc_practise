function rot13(str) { // LBH QVQ VG!
  var newStr = new Array();
  for(var i = 0;i<str.length;i++){
    console.log(str.charCodeAt(i));
    if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <=90){
      if(str.charCodeAt(i) > 77)
        newStr.push(String.fromCharCode( str.charCodeAt(i) - 13));
      else
        newStr.push(String.fromCharCode( str.charCodeAt(i) + 13));
    } else {
        newStr.push(String.fromCharCode(str.charCodeAt(i)));
    }
  } 
  return newStr.join("").replace(/-/g,' ');
}

// Change the inputs below to test
console.log(rot13("."));
