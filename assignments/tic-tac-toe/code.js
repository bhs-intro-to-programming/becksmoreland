// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

let playerOne = {current: 'X'};

const keepTrack = () => {
  for (let x = 0; x < 9; x++) {
    if ((x + 2) % 2 === 0) {
      playerOne.current === 'O';
    } else {
      playerOne.current === 'X'
    }
    return x;
}
}





registerOnclick((x, y) => {
  drawText(playerOne.current, x, y, 'blue', Math.min(width, height) * 0.3);
  keepTrack()
});




drawLine(150, height / 3, 400, height / 3, 'black');

drawLine(150, height / 3 + 50, 400, height / 3 + 50, 'black');

drawLine(width / 3, 0, width / 3, 200, 'black');

drawLine(width / 3 + 100, 0, width / 3 + 100, 200, 'black');
