// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

function solve(s) {
  const numArr = [];
  const length = s.length;

  let i = 0;
  while (i < length) {
    let tempStr = s.slice(i);
    if (   tempStr.startsWith("0x")
        || tempStr.startsWith("0o")
        || tempStr.startsWith("0b")
        ) {
          i++;
          continue;
        }

    let number = parseInt(tempStr);

    if (number) {
      numArr.push(number);
      i += String(number).length;
    }

    i++;
  }

  return Math.max(...numArr);
};
