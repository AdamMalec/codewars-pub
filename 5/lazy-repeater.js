// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

function makeLooper(str) {
  let loop = 0;

  return function() {
    return str[loop++ % str.length];
  }
}
