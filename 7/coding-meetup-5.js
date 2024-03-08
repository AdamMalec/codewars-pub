// https://www.codewars.com/kata/5828713ed04efde70e000346

function countLanguages(list) {
  return list.reduce((acc, cur) => {
    const lang = cur.language;
    if (!acc.hasOwnProperty(lang)) {
      acc[lang] = 1;
      return  acc;
    } else {
      acc[lang]++;
      return acc
    }
  }, {})
}
