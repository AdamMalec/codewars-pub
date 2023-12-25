// https://www.codewars.com/kata/582a53ed261c2af9d200018c

function addUsername(list) {
  const presentYear = (new Date).getFullYear();
  return list.map((item) => {
    const username =
      item.firstName.toLowerCase() +
      item.lastName[0].toLowerCase() +
      (presentYear - item.age);
    item.username = username;
    return item;
  });
}
