// https://www.codewars.com/kata/5375f921003bf62192000746

function abbreviate(string) {
  const strArr = string.split(" ");

  function insertAbb(w) {
    if (w.length >= 4) {
      let insideLength = w.length - 2;
      let lastLetter = w[w.length - 1];
      if (lastLetter === ",") {
        insideLength = w.length - 3;
        lastLetter = w[w.length - 2];
        return w[0] + insideLength + lastLetter + ",";
      } else {
        return w[0] + insideLength + lastLetter;
      }
    } else {
      return w;
    }
  }

  return strArr
    .map((word) => {
      return word
        .split("-")
        .map((wrd) => insertAbb(wrd))
        .join("-");
    })
    .join(" ");
}
