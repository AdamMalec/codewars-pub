// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(n){
	let result = "";
  for (let i = 1; i <= n; i++) {
		let str = "";

		if( i !== n) str = "+".repeat(n) + "\n";
		else str = "+".repeat(n);

		result += str;
	}

	return result;
}
