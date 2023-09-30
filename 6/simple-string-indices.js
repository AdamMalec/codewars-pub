// https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078

function solve(str,idx) {
  if (str[idx] !== '(') return -1;

  let openCounter = 0;

  for (let i = idx; i < str.length; i++) {
    if (str[i] === '(') openCounter++;
    if (str[i] === ')') openCounter--;
    if (openCounter === 0) return i;
  }
 }
