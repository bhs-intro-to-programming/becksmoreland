const countTens = (array) => {
  let tensCount = 0;
  for (let x = 0; x <= array.length; x++) {
    if (array[x] === 10) {
      tensCount++;
    }
  }
  return tensCount;
}

const sum = (array) => {
  let totalSum = 0;
  for (let x = 0; x < array.length; x++) {
    totalSum = totalSum + array[x];
  } 
  return totalSum;
}

const evens = (array) => {
  let newArray = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x] % 2 === 0) {
      newArray.push(array[x])
    }
  }
  return newArray
}

const anyOverOneHundred = (array) => {
  for (let x = 0; x < array.length; x++) {
    if (array[x] > 100) {
      return true;
    } 
  }
  return false;
}

const pyramid = (integer) => {
  let newArray = []
  for (let y = 0; y < integer; y++) {
    for (let x = 0; x < integer; x++) {
    newArray.push(integer - x)
  }
  }
  return newArray;
}