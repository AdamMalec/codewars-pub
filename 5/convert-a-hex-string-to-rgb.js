// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
  const noHashStr = hexString.slice(1);
  const colorsArr = [];

  for (let i = 0; i < noHashStr.length; i += 2) {
    colorsArr.push(Number(`0x${noHashStr.slice(i, i + 2)}`));
  }

  return {
    r: colorsArr[0],
    g: colorsArr[1],
    b: colorsArr[2]
  }
}
