function squares(x, n) {
  let result = x;
  for (let i = 1; i <= n; i++) {
    result *= result;
  }

  return result;
}

squares(2,5) // [2,4,16,256,65536]
