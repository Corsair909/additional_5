module.exports = function check(str, bracketsConfig) {
  // your solution
  var step = 0;

  var arr = str.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '{' || arr[i] === '[' || arr[i] === '(') {
      step++;
    } else {
      step--;
    }
    
  }

  if (step === 0) {
    return true;
  } else {
    return false;
  }


}
