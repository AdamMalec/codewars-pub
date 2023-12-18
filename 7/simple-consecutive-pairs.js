// https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(arr) {
  let pairs = 0;
  const pairArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    pairArr.push(arr.slice(i, i + 2));
  }

  pairArr.forEach(item => {
    let diff = Math.abs(item[0] - item[1])
    if (diff === 1) pairs++
  })

  return pairs;
};
