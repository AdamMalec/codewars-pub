// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

function rowWeights(arr) {
  let team1 = 0;
  let team2 = 0;

  arr.forEach((item, idx) => {
    if (idx % 2 === 0) team1 += item;
    else team2 += item;
  });

  return [team1, team2];
}
