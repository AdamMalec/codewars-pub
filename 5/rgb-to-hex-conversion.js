// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  const format = (value) => value.toString(16).toUpperCase().padStart(2, "0");

  const argsArr = [...arguments].map((value) => {
    if (value < 0) return format(0);
    if (value > 255) return format(255);
    return format(value);
  });

  return argsArr.join("");
}
