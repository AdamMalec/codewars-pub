// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819

function combineObjects(obj1, obj2) {
  const resultObj = {...obj1};

  for (const key in obj2) {
    if (Object.hasOwn(resultObj, key)) {
      resultObj[key] += obj2[key];
    } else {
      resultObj[key] = obj2[key];
    }
  }

  return resultObj;
}
