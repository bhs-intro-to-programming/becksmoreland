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