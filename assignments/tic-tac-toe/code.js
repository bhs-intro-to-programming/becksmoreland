// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

let currentPos = 
  [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];


let playerOne = 0;

registerOnclick((x, y) => {


  if (playerOne % 2 === 0) {
    drawText('X', x, y, 'red', Math.min(width, height) * 0.3);
  } else {
    drawText('O', x, y, 'blue', Math.min(width, height) * 0.3);
  }

  if ((x < width / 3) && (y > height / 3)) {
    currentPos[1][1] = 'X';
  } else if ((x > width / 3 && x < width / 3 + 100) && y > height / 3) {
    currentPos[1][2] = 'O';
  } 


  
  playerOne++

  if ((x < width / 3) && (y > height / 3 - 20)) {
    currentPos[1][1] = 'X';
  } else if (x > width / 3 && x < width / 3 + 100 && y > height / 3 - 20 ) {
    currentPos[1][2] = 'O';
  } else if (x > width / 3 + 100 && y > height / 3 - 20) {
    currentPos[1][3] = 'X';
  } else if (x < width / 3 && y < height / 3 && y > height / 3 + 20) {
    currentPos[2][1] = 'O';
  } else if (x > width / 3 && x < width / 3 + 100 && y < height / 3 && y > height / 3 + 20) {
    currentPos[2][2] = 'X';
  } else if (x > width / 3 + 100 && y < height / 3 && y > height / 3 + 20) {
    currentPos[2][3] = 'O';
  } 
});



const ticTacToeBoard = () => {
  for (let i = 0; i < 2; i++) {
    const lines = (i + 1) * width / 3;
    drawLine(lines, 0, lines, height, 'black', 10)
  }

   for (let i = 0; i < 2; i++) {
    const lines = (i + 1) * height / 3;
    drawLine(0, lines, width, lines, 'black', 10)
  }
};

ticTacToeBoard()

