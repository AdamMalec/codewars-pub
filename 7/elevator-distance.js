function elevatorDistance(arr) {
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    result += Math.abs(arr[i] - arr[i+1]);
  }

  return result
}
