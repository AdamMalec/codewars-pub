// https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashatize(num) {
  if (!Number.isFinite(num)) return NaN;

  let numStr = String(Math.abs(num));
  let newStr = "";

  for (let i = 0; i < numStr.length; i++) {
    if (+numStr[i] % 2 !== 0) {
      newStr += `-${numStr[i]}-`;
      newStr = newStr.replace('--', '-');
    } else {
      newStr += numStr[i];
    }
  }

  if (newStr[0] === '-') newStr = newStr.slice(1);
  if (newStr[newStr.length - 1] === '-') newStr = newStr.slice(0 , -1);

  return newStr;
}
