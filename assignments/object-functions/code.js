const getX = (object) => {
  return object.x;
}

const point = (x, y) => {
  return {x : x, y : y}
}

const emptyObject = () => {
  return {};
}

const distance = (pointObject1, pointObject2) => {
  return Math.sqrt((pointObject1.x - pointObject2.x) ** 2 + (pointObject1["y"] - pointObject2["y"]) ** 2);
}

const midpoint = (pointObject1, pointObject2) => {
  let newObject1 = (pointObject1.x + pointObject2.x) / 2;
  let newObject2 = (pointObject1.y + pointObject2.y) / 2;
  return {"x" : newObject1, "y" : newObject2};
}

const sumSalaries = (array) => {
  let totalSalaries = 0;
  for (let x = 0; x < array.length; x++) {
    totalSalaries = totalSalaries + array[x]["salary"];
  }
  return totalSalaries;
}

const newHighScore = (currentScore, array) => {
  let newScore = currentScore;
  for (let x = 0; x < array.length; x++) {
    if (newScore < array.x["score"]]) {
      newScore = array.x["score"];
    }
  }
  return newScore;
}

const summarizeBooks = (bookArray) => {
  let totalPages = 0;
  let allTitles = [];
  for (let x = 0; x < bookArray.length; x++) {
    totalPages = totalPages + bookArray[x]["pages"];
    allTitles.push(bookArray[x]["title"])
  }
  return {"titles": allTitles, "pages": totalPages}
}
