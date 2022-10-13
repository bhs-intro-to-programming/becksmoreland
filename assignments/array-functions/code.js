const countTens = (array) => {
  let tensCount = 0;
  for (let x = 0; x <= array.length; x++) {
    if (array[x] === 10) {
      tensCount++;
    }
  }
  return tensCount;
}
