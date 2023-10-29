// https://www.codewars.com/kata/537529f42993de0e0b00181f

function countInversions(array) {
  let counter = 0;
  let isOffset = false;

  for (var i = 0; i < array.length; i++) {
    const curNum = array[i];

    if ( curNum > array[i + 1]) {
      array[i] = array[i + 1];
      array[i + 1] = curNum;
      isOffset = true;
      counter++;
    }

    if (i === array.length - 1 && isOffset) {
      isOffset = false;
      i = -1;
    }
  }

  return counter;
}
