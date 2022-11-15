// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

let playerOne = 'O';

const keepTrack = () => {
  for (let x = 0; x < 9; x++) {
    if ((x + 2) % 2 === 0) {
      playerOne = 'X'
    } else {
      playerOne = 'O'
    }
  }
}





registerOnclick((x, y) => {
  drawText(playerOne, x, y, 'blue', Math.min(width, height) * 0.3);
  keepTrack()
});

const ticTacToe = () => {
  let currentTurn = 0;
  for (let x = 0; x < 9; x++) {
    if ((currentTurn + 2) % 2 === 0) {

    } else {
      registerOnclick((x, y) => {
        drawText('O', x, y, 'blue', Math.min(width, height) * 0.3);
        keepTrack();
      });
    }
  }
};




drawLine(150, height / 3, 500, height / 3, 'black');

drawLine(150, height / 3 + 75, 500, height / 3 + 75, 'black');
