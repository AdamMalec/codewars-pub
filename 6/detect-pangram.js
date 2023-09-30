// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  const strArr = [...string.toLowerCase()];
  const tempSet= new Set();

  strArr.forEach((item) => {
    if(/[a-zA-Z]/g.test(item)) {
      tempSet.add(item)
    }
  });

  return tempSet.size === 26 ? true : false;
}
