const countTens = (array) => {
  let totalTens = 0
  for (let x = 0; x < array.length; x++) {
    if (array[x] === 10) {
      totalTens = totalTens + 1;
    }
  }
  return totalTens;
}