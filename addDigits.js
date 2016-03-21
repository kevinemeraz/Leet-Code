/*Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.*/
var addDigits = function(num) {
  //declare var for the running tally
  currentSum = 0;
  //strip num apart into an array, so we can iterate through it
  var numAsArray = num.toString().split('');

  //if num is only one digit, then return num
  if(numAsArray.length === 1) {
    return Number(numAsArray);
  }
  //else, iterate through the string and add the values
  else {
    for(var i = 0; i < numAsArray.length; i++) {
      currentSum += Number(numAsArray[i]); 
    }
  }
  //now that we have this new value, run addDigits again
  // this will check if it's a single number, or if we need
  // to add the numbers together again and repeat the process
  return addDigits(currentSum);

};