function reversTheBits(num) {
  return parseInt([...num.toString(2)].reverse().join(''), 2);
}
