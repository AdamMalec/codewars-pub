function getSum(a, b) {
  let start, end, result;

  if (a === b) {
    return a;
  } else if (a <b) {
    start = a;
    end = b;
  } else {
    start = b;
    end = a;
  }

  result = start;

  while (start < end) {
    result = result + (start + 1);
    start++;
  }

  return result;
}
