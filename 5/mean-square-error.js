// https://www.codewars.com/kata/51edd51599a189fe7f000015

var solution = function (firstArray, secondArray) {
  const absArr = [];

  for (let i = 0; i < firstArray.length; i++) {
    absArr.push(Math.abs(firstArray[i] - secondArray[i]) ** 2);
  }

  return absArr.reduce((acc, cur) => acc + cur, 0) / firstArray.length;
};
