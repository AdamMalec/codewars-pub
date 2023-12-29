// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win) {
  const wins = ticket.filter((item) => {
    for (const letter of item[0]) {
      if (letter.codePointAt(0) === item[1]) {
        return letter;
      }
    }
  });

  return wins.length >= win ? "Winner!" : "Loser!";
}
