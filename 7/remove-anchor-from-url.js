// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url) {
  const anIndex = url.indexOf("#");
  if (anIndex === -1) return url;
  return url.slice(0, anIndex);
}
