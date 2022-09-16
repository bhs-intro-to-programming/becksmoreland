const add = (a, b) => a +b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const mod = (a, b) => a % b;

const averageOfTwo = (a, b) => (a + b) / 2;

const averageOfThree = (a, b, c) => (a + b + c) / 3;

const distance = (a, b) => Math.abs(a - b)

const manhattanDistance = (x1, x2, y1, y2) => Math.abs(Math.abs(x1) - Math.abs(x2)) + Math.abs(Math.abs(y1) - Math.abs(y2));

const euclideanDistance = (x1, x2, y1, y2) => Math.sqrt(x1 ** 2 + x2 ** 2) + Math.sqrt(y1 ** 2 + y2 ** 2);