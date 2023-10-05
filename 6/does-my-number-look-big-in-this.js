// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  const valueArr = value.toString().split('');
  const sum = valueArr.reduce((acc, item) => acc + item**valueArr.length, 0);

  return Number(sum) === value ? true : false;
}
