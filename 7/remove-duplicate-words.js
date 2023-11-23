// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

function removeDuplicateWords (s) {
  const sArr = s.split(' ');
  const sSet = new Set(sArr);
  return [...sSet].join(' ');
}

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'); // 'alpha beta gamma delta'
