// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height;
};

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1;
  } else if (e2.salary > e1.salary) {
    return e2;
  }
};

const isSamePoint = (p1, p2) => {
  return p1.x === p2.x && p1.y === p2.y;
};

const totalWithTip = (bill, tipPercentage) => {
  return {subtotal : bill, tip: tipPercentage, total: bill * tipPercentage};
};

const isWinner = (player) => {
  return player.score > 100;
};

const updateWins = (players) => {
  for (let x = 0; x < players.length; x++) {
    if (isWinner({score: players[x][score]})) {
      players[x][wins] === wins + 1;
    }
  }
};

const bigWinners = (players) => {
  let allBigWinners = [];
  for (let x = 0; x < players.length; x++) {
    if (players[x][wins] > 10) {
      allBigWinenrs.push(players[x])
    }
  }
  return allBigWinners;
};

const fillTimesTable = (table) => {
  fullTable = [];
  for (let x = 1; x < table.length; x++) {
    fullTable.push[x - 1][x - 1](x * x);
  }
  return fullTable;
};

const sums = (n) => {
  let sumArray = [];
  for (let x = 0; x < n; x++) {
    sumArray.push(x + sumArray[x - 1])
  }
  return sumArray;
};

const rule110 = (cells) => {
  
};
