// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

function compose(...f) {
  return function(g) {
    return f.reduceRight((res, fn) => fn(res), g);
  }
}
