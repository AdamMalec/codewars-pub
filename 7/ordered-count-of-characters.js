const orderedCount = function (text) {
  if (!text) return [];
  let tempObj = {};

  for (const letter of text) {
    let key = "+" + letter;
    if (tempObj[key]) tempObj[key]++;
    else tempObj[key] = 1;
  }

  const tempResult = Object.entries(tempObj);
  return tempResult.map((item) => [item[0][1], item[1]])
}
