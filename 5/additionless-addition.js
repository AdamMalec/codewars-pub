// https://www.codewars.com/kata/536ce83e2f403659a5000d47

function add(a, b) {
  if (b == 0) {
    return a;
  } else {
    return add(a ^ b, (a & b) << 1);
  }
}
