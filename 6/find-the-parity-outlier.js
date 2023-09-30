// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  const oddArr = [];
  const evenArr = [];

  integers.forEach(item => {
    item % 2 === 0 ? oddArr.push(item) : evenArr.push(item);
  });

  return (oddArr.length === 1) ? oddArr[0] : evenArr[0];
}
