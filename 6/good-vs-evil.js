// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil) {
  const goodUnits = [1, 2, 3, 3, 4, 10];
  const evilUnits = [1, 2, 2, 2, 3, 5, 10];

  const goodInputArr = good.split(' ');
  const evilInputArr = evil.split(' ');

  let goodPower = 0;
  let evilPower = 0;

  for (let i = 0; i < goodInputArr.length; i++) {
    goodPower += goodInputArr[i] * goodUnits[i];
  }

  for (let i = 0; i < evilInputArr.length; i++) {
    evilPower += evilInputArr[i] * evilUnits[i];
  }

  if (goodPower > evilPower) return "Battle Result: Good triumphs over Evil"
  else if (goodPower < evilPower) return "Battle Result: Evil eradicates all trace of Good"
  else return "Battle Result: No victor on this battle field"
}
