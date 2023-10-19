// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/

function longestRepetition(string) {
  let startLetter = string[0];
  if (!startLetter) return ["",0];

  let maxCount = 0;
  let resultArr = [];

  for (const letter of string) {
    if (letter === startLetter) {
      maxCount += 1;
    } else {
      resultArr.push([startLetter, maxCount]);
      startLetter = letter;
      maxCount = 1;
    }
  }

  resultArr.push([startLetter, maxCount]);
  let maxValue = Math.max(...resultArr.map(item => item[1]));

  return resultArr.find(item => item[1] === maxValue);
}
