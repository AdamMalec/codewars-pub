// https://www.codewars.com/kata/59f061773e532d0c87000d16

function elevatorDistance(arr) {
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    result += Math.abs(arr[i] - arr[i+1]);
  }

  return result
}
