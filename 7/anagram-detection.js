// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

var isAnagram = function(test, original) {

  function stringToObj(string) {
    const newObj = {};
    for (let letter of string) {
      letter = letter.toLowerCase();
      newObj[letter] ? newObj[letter]++ : newObj[letter] = 1;
    }
    return newObj;
  }

  const testObj = stringToObj(test);
  const originalObj = stringToObj(original);

  for (const key in testObj) {
    if(
        testObj[key] !== originalObj[key] ||
        Object.keys(testObj).length !== Object.keys(originalObj).length
      ) return false;
  }

  return true;
};
