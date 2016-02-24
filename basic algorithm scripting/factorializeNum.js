function factorialize(num) {
  var sum = 1;
  var temp = num;
  for(var i = 0;i < temp;i++){
    sum = sum * num;
    num--;
  }
  return sum;
}

factorialize(5);