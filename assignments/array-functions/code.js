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

const evens = (array) => {
  let newArray = [];
  for (let x = 0; x < array.length; x++) {
    if ((array[x] + 2) % 2 === 0) {
      newArray.push(array[x])
    }
  }
  return newArray;
}

const anyOverOneHundred = (array) => {
  for (let x = 0; x < array.length; x++) {
    if (array[x] > 100) {
      return true;
    }
  }
  return false;
}