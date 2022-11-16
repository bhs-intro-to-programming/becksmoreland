const countTens = (array) => {
  let totalTens = 0
  for (let x = 0; x < array.length; x++) {
    if (array[x] === 10) {
      totalTens = totalTens + 1;
    }
  }
  return totalTens;
}

const sum = (array) => {
  let total = 0;
  for (let x = 0; x < array.length; x++) {
    total = total + array[x];
  }
  return total;
}