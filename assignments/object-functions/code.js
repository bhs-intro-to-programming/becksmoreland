const getX = (object) => {
  return object.x;
}

const point = (arg1, arg2) => {
  return {x: arg1, y: arg2}
}

const emptyObject = () => {
  return {}
}

const distance = (pObject, pObject2) => {
  return Math.sqrt((pObject.x - pObject2.x) ** 2 + (pObject.y - pObject2.y) ** 2)
}

const midpoint = (pObject, pObject2) => {
  return {x : (pObject.x + pObject2.x) / 2, y : (pObject.y + pObject2.y) / 2};
}

const sumSalaries = (array) => {
  let totalSalaries = 0;
  for (let x = 0; x < array.length; x++) {
    totalSalaries = totalSalaries + array[x].salary
  }
  return totalSalaries;
}

const newHighScore = (currentScore, array) => {
  let newScore = currentScore;
  for (let x = 0; x < array.length; x++) {
    if (newScore < array[x].score) {
      newScore = array[x].score;
    }
  }
  return newScore;
}

const summarizeBooks = (bookArray) => {
  let totalPages = 0;
  let allTitles = [];
  for (let x = 0; x < bookArray.length; x++) {
    totalPages = totalPages + bookArray[x].pages;
    allTitles.push(bookArray[x].title);
  }
  return {"titles": allTitles, "pages": totalPages}
}

