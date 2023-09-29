//https://www.codewars.com/kata/57475353facb0e7431000651

function hotSingles(arrA, arrB) {
  const setArrA = new Set(arrA);
  const setArrB = new Set(arrB);

  for (const key of setArrB.keys()) {
    if (setArrA.has(key)) {
      setArrA.delete(key)
    } else {
      setArrA.add(key)
    }
  }

  return [...setArrA];
}
