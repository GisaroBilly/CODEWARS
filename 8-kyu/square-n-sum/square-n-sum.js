function squareSum(numbers){
return numbers
  .map( num => num * num)
  .reduce((num,sq) => num + sq, 0);
}
​