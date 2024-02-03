// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
  let resultStr = "";
  for (const digit of x) {
    if (Number(digit) < 5) resultStr += '0';
    else resultStr += '1';
  }

  return resultStr;
}
