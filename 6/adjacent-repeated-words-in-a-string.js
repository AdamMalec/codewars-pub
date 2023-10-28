// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

function countAdjacentPairs(searchString) {
  const searchArr = searchString.split(" ").map((item) => item.toLowerCase());
  let step = 0;
  let counter = 0;

  for (let i = 1; i <= searchArr.length; i++) {
    if (searchArr[i] !== searchArr[i - 1]) step = 0;
    if (searchArr[i] === searchArr[i - 1] && step === 0) step++;
    if (searchArr[i] === searchArr[i - 1] && step === 1) {
      counter++;
      step++;
    }
  }

  return counter;
}
