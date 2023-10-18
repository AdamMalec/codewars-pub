// https://www.codewars.com/kata/511f11d355fe575d2c000001

function takeOldest(arr) {
  return arr.sort((a, b) => a - b).slice(-2);
}
