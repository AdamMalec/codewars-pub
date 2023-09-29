function getUniq(arrA, arrB) {
  const resultArr = [];
  const setArrA = new Set(arrA);
  const setArrB = new Set(arrB);

  for (const key of setArrB.keys()) {
    if (!setArrA.has(key)) {
      resultArr.push(key)
    }
  }

  return resultArr;
}
