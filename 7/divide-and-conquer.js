// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x) {
  const numArr = [];
  const strArr = [];

  for (const item of x) {
    if (Number.isFinite(item)) numArr.push(item);
    else strArr.push(+item);
  }

  const numSum = numArr.reduce((acc, cur) => acc + cur, 0);
  const strSum = strArr.reduce((acc, cur) => acc + cur, 0);

  return numSum - strSum;
}
