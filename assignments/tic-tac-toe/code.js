// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.


const ticTacToe = () => {
  for (let x = 0; x < 9; x++) {
    if ((currentTurn + 2) % 2 === 0) {
      registerOnclick((x, y) => {
        drawText('O', x, y, 'blue', Math.min(width, height) * 0.3);
        currentTurn = currentTurn++;
      }
    });
  }
};
let currentTurn = 0;


const currentPos = [
  [],
  [],
  [],
]; 
