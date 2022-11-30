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