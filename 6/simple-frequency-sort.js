// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/solutions/javascript

function solve(arr) {
  const countObj = {};

  arr.forEach(item => {
    if (countObj[item]) {
      countObj[item]++;
    } else {
      countObj[item] = 1;
    }
  });

  arr.sort((a, b) => {
    if (countObj[b] === countObj[a]) return a - b;
    else return countObj[b] - countObj[a]
  });

  return arr;
}
