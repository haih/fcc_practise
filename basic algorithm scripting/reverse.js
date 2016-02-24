function reverseString(str) {
  var rawArray = new Array();
    rawArray = str.split("").reverse();
  return rawArray.join("");
}

console.log(reverseString("hello"));
