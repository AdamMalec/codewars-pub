// https://www.codewars.com/kata/582746fa14b3892727000c4f

function countDevelopers(list) {
  const devFromEU = list.filter(item => item.continent === "Europe" && item.language === "JavaScript");
  return devFromEU.length > 0 ? devFromEU.length : 0;
}
