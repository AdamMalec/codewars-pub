// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces) {
  const bracesArr = braces.split("");
  const openBraces = ["[", "(", "{"];
  const closeBraces = ["]", ")", "}"];

  for (let i = 0; i < braces.length; i++) {
    if (
      closeBraces.some((item) => item === bracesArr[i]) &&
      openBraces.indexOf(bracesArr[i - 1]) === closeBraces.indexOf(bracesArr[i])
    ) {
      bracesArr.splice(i - 1, 2);
      i -=2;
    }
  }

  return bracesArr.length ? false : true;
}
