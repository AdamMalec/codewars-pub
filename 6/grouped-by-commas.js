// https://www.codewars.com/kata/5274e122fc75c0943d000148

function groupByCommas(n) {
  let nStr = [...String(n)];
  const tempArr = [];

  while (nStr.length > 0) {
    tempArr.push(nStr.splice(-3, 3));
  }

  return tempArr
    .reverse()
    .map((item) => item.join(""))
    .join(",");
}
