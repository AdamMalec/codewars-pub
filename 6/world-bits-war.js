// https://www.codewars.com/kata/58865bfb41e04464240000b0

function bitsWar(arr) {
	const odd = arr.filter((item) => item % 2 !== 0);
	const even = arr.filter((item) => item % 2 === 0);

  const oddStr = odd.map((item) => item.toString(2));
  const evenStr = even.map((item) => item.toString(2));

	function countBits(arrStr) {
		return arrStr.reduce((acc, cur) => {

      let counter = 0;

      cur.split("").forEach((item) => {
        if (item === "1") {
          counter++
        }
      });

      if (cur[0] === "-") {
        acc -= counter;
      } else {
        acc += counter;
      };

      return acc
    }, 0)
	}

	const oddCounter = countBits(oddStr);
	const evenCounter = countBits(evenStr);

  if (oddCounter > evenCounter) return "odds win";
  if (oddCounter < evenCounter) return "evens win";
  return "tie";
}

bitsWar([7,-3,20]);
// console.log("111" - "11");
