// https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup(s) {
  return s.map((item) => {
    const strItem = item.split("");
    for (let i = 1; i < strItem.length; i++) {
      if (strItem[i - 1] === strItem[i]) {
        strItem.splice(i - 1, 1);
        i--;
      }
    }

    return strItem.join('');
  });
}

dup(["allottee", "assessee"]); // ["abracadabra","alote","asese"]
