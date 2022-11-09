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
  return Math.sqrt((pointObject1["x"] - pointObject2["x"]) ** 2 + (pointObject1["y"] - pointObject2["y"]) ** 2);
}

const midpoint = (pointObject1, pointObject2) => {
  let newObject1 = (pointObject1["x"] + pointObject2["x"]) / 2;
  let newObject2 = (pointObject1["y"] + pointObject2["y"]) / 2;
  return {"x" : newObject1, "y" : newObject2};
}

const sumSalaries = (array) => {
  let totalCount = 0;
  for (let x = 0; x < array.length; x++) {
    totalCount = totalCount + array[x]["salary"];
  }
  return totalCount
}

const newHighScore = (currentScore, array) => {
  let newScore = 0;
  for (let x = 0; x < array; x++) {
    if (currentScore < array[x]["score"]) {
      newScore = array[x]["score"];
    }
  }
  return newScore;
}

const summarizeBooks = (bookArray) => {
  
}
