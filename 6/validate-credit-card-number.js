// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

function validate(n) {
  let nStr = n.toString().split('').reverse();
  let sum = 0;

  for (let i = 0; i < nStr.length; i++) {

    let num = Number(nStr[i])

    if (i % 2 !== 0) {
      num *= 2;
      if (num > 9) {
        num -= 9
      }
    }

    sum += num;
  }

  return sum % 10 === 0;
}
