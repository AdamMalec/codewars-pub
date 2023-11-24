// https://www.codewars.com/kata/580755730b5a77650500010c

function sortMyString(str) {
  const oddArr  = [];
  const evenArr = [];

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) oddArr.push(str[i])
    else evenArr.push(str[i])
  }

  return `${oddArr.join('')} ${evenArr.join('')}`;
}
