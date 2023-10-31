// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(str) {
  const reverseStr = str.split("").reverse().join("");
  let reverseNum = "";

  for (let i = 0; i < reverseStr.length; i++) {
    if (isFinite(reverseStr[i])) reverseNum += reverseStr[i];
    else break;
  }

  const numLength = reverseNum.length;
  const num = +reverseNum.split("").reverse().join("");
  const incNum = num + 1;

  const letterPart = str.slice(0, str.length - numLength);
  const numPart = String(incNum).padStart(numLength, "0");

  return letterPart + numPart;
}
