function titleCase(str) {
  str = str.toLowerCase();
  var arrString = str.split(" ");
  for(var i = 0;i < arrString.length;i++){
    //arrString[i][0].toUpperCase();
    arrString[i] = arrString[i].charAt(0).toUpperCase()+arrString[i].substring(1);
  }
  return arrString.join(" ");
}


console.log(titleCase("I'm a little tea pot"));
