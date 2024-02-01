function capitalize(s){
  let oddStr = "";
  let evenStr = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) oddStr += s[i].toUpperCase()
    else oddStr += s[i];
  }

  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) evenStr += s[i].toUpperCase()
    else evenStr += s[i];
  }

  return [oddStr, evenStr]
};
