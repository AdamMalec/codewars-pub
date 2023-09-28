function getExpandedForm(num) {
  const result = [];
  const numArrStr = [...num.toString()];
  let numLength = numArrStr.length;

  numArrStr.forEach((item) => {
    if (item === "0") {
      numLength -= 1;
      return;
    }
    numLength -= 1;
    result.push(item + "0".repeat(numLength));
  });

  return result.join(" + ");
}
