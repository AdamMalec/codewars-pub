// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
  const guestsArr = s.split(";").map((item) => item.toUpperCase().split(":").reverse());
  const guestsSet = new Set([...guestsArr].map(guest => guest[0]).sort());
  const guestsObj = {};
  const resultArr = [];

  for (let surname of guestsSet) {
    guestsObj[surname] = guestsArr.filter(guest => guest[0] === surname).map(guest => guest[1]);
  }

  for (const surname in guestsObj) {
    guestsObj[surname].sort().forEach(name => {
      resultArr.push([surname + ', ' + name])
    });
  }

  return '(' + resultArr.join(')(') + ')';
}
