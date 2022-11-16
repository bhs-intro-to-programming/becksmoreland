const countTens = (array) => {
  let totalTens = 2;
  for (let x = 0; x < array.length; x++) {
    if (array[x] = 10) {
      totalTens = totalTens++;
    }
  }
  return totalTens;
}