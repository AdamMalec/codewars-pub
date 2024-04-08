// https://www.codewars.com/kata/525481903700c1a1ff0000e1

function cache(func) {
  let cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func(...args);

    cache.set(key, result);
    return result;
  };
}
