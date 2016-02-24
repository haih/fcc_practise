function palindrome(str) {
	// Good luck!
	var reg = /[^a-z0-9]/g;
	var newStr = str.toLowerCase().replace(reg,"");
 //  //.toLowerCase().
	var palindrome = newStr.split("").reverse().join("");
	if(palindrome === newStr){
	  return true;
	}
	return false;
}



console.log(palindrome("My age is 0, 0 si ega ym."));