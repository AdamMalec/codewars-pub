function getPassengers(arr) {
  let inPass = 0;

  arr.forEach(element => {
    inPass += element[0];
    inPass -= element[1];
  });

  return inPass;
}
