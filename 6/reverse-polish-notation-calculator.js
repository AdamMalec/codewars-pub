// https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript

function calc(expr) {
  if(!expr) return 0;

  const operatorsArr = ['+', '-', '*', '/'];
  const exprArr = expr.split(' ');

  for (let i = 0; i < exprArr.length; ++i) {
    if (operatorsArr.includes(exprArr[i])) {
      let leftOperand = exprArr[i - 2 ];
      let rightOperand = exprArr[i - 1 ];
      let operator = exprArr[i];
      let result = eval(leftOperand + operator + rightOperand);
      exprArr.splice(i - 2, 3, result);
      i -= 2;
    }
  }

  return Number(exprArr);
}
