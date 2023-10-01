//https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  const resultArr = [];

  for (let i = 0; i < nFloors; i++) {
    let str = '';
    str += ' '.repeat(nFloors - i - 1);
    str += '*'.repeat(i * 2 + 1);
    str += ' '.repeat(nFloors - i - 1);
    resultArr.push(str);
  }

  return resultArr;
}
