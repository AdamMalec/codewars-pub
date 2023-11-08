function kebabize(str) {
  const strArr = str.split("");
  strArr[0] = strArr[0].toLowerCase();

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      if (parseInt(strArr[i]) || parseInt(strArr[i]) === 0) {
        strArr.splice(i, 1);
        i -= 1;
        continue;
      }

      const letter = strArr[i].toLowerCase();
      strArr.splice(i, 1, "-", letter), (i = i + 1);
    }
  }


  return strArr.join("");
}
