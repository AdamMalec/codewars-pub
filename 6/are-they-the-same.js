// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2) {
  if(!(array1 && array2)) return false;

  let result = true;
  const sqrtArr2 = array2.map(item => Math.sqrt(item));

  sqrtArr2.forEach(el => {
    if (!array1.includes(el)) result = false;
    if (array1.includes(el)) {
      let index = array1.indexOf(el);
      array1.splice(index, 1)
    }
  });

  return result;
}
