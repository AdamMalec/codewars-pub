// https://www.codewars.com/kata/58d76854024c72c3e20000de

function reverse(str) {
  const strArr = str.split(" ");

  for (let i = 1; i < strArr.length; i+=2) {
    strArr[i] = strArr[i].split("").reverse().join("");
  }

  return strArr.join(" ").trim();
}
