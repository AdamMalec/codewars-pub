// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(str) {
  const strArr = str.split('');
  let i = 0;
  while (i < strArr.length) {
    if (strArr.indexOf('#') === 0) {
      strArr.splice(strArr.indexOf('#'), 1);
      i--;
    } else if (strArr.indexOf('#') !== -1) {
      strArr.splice(strArr.indexOf('#') - 1, 2);
      i--;
    }
    i++;
  }

  return strArr.join('');
}
