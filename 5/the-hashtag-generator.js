// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if(!str.trim()) return false;

  const strArr = str
    .split(" ")
    .filter((el) => el)
    .map((el) => el[0].toUpperCase() + el.slice(1));

  const resultStr = `#${strArr.join('')}`;

  return resultStr.length > 140 ? false : resultStr;
}
