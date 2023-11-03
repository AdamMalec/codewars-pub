// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
  function makeStrObj(str) {
    const strObj = {};
    for (let letter of str) {
      if (strObj[letter]) strObj[letter]++;
      else strObj[letter] = 1;
    }
    return strObj;
  }

  const strObj1 = makeStrObj(str1);
  const strObj2 = makeStrObj(str2);

  for (let key in strObj2) {
    if (strObj1[key] === undefined || strObj1[key] < strObj2[key]) {
      return false;
    }
  }

  return true;
}
