const getX = (object) => {
  return object.x;
}

const point = (x, y) => {
  return {x : x, y : y}
}

const emptyObject = () => {
  return {};
}

const distance = (x, y) => {
  return Math.sqrt((x.x - x.y) ** 2 + (y.x y.y) ** 2);
}