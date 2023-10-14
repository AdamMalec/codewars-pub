// https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
  const alphabetArr = [...'abcdefghijklmnopqrstuvwxyz'];
  let maxValue = 0;

  const splitArr = s.split('a')
                    .map(item => item.split('e')).flat()
                    .map(item => item.split('i')).flat()
                    .map(item => item.split('o')).flat()
                    .map(item => item.split('u')).flat();

  splitArr.forEach(item => {
    let totalValue = 0;
    for (const letter of item) {
      totalValue += alphabetArr.indexOf(letter) + 1;
    }
    if (totalValue > maxValue) maxValue = totalValue;
  });

  return maxValue;
};
