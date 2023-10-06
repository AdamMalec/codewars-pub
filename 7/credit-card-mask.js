// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
  if (cc.length < 4) return cc;
  else return cc
                .split('')
                .fill('#', 0, cc.length - 4)
                .join('');
}
