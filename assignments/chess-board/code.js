

const blackPieces = {'BlackRook' :'♜', 'BlackKing' : '♚', 'BlackQueen' : '♛', 'BlackBishop' :'♝', 'BlackKnight' : '♞', 'BlackPawn' : '♟'}

const whitePieces = {'WhiteKing' : '♔', 'WhiteQueen' : '♕', 'WhiteRook' : '♖', 'WhiteBishop' : '♗', 'WhiteKnight' : '♘', 'WhitePawn' : '♙'}

// Example of drawing one of the pieces
const wKing = () => {
  drawText(whitePieces.WhiteKing, width/2, height/2 + 100, 'black', 64);
}

const wQueen = (space) => {
   drawText(whitePieces.WhiteQueen, width/2 - space, height/2 + 100, 'black', 64);
}

const wRook = (space) => {
   drawText(whitePieces.WhiteRook, width/2 - space, height/2 + 100, 'black', 64);
}

const wKnight = (space) => {
  drawText(whitePieces.WhiteKnight, width/2 - space, height/2 + 100, 'black', 64);
}

const wBishop = (space) => {
  drawText(whitePieces.WhiteBishop, width/2 - space, height/2 + 100, 'black', 64);
}

const bKing = () => {
  drawText(blackPieces.BlackKing, width/2, height/2 - 75, 'black', 64);
}

const bQueen = (space) => {
  drawText(blackPieces.BlackQueen, width/2 - space, height/2 - 75, 'black', 64)
}

const bBishop = (space) => {
  drawText(blackPieces.BlackBishop, width/2 - space, height/2 - 75, 'black', 64)
}

const bKnight = (space) => {
    drawText(blackPieces.BlackKnight, width/2 - space, height/2 - 75, 'black', 64)
}

const bRook = (space) => {
    drawText(blackPieces.BlackRook, width/2 - space, height/2 - 75, 'black', 64)
}

const chessBoard = [
  [bRook(200), bKnight(150), bBishop(100), bQueen(50), bKing(), bBishop(- 50), bKnight(- 100), bRook(-150)],
  [],
  [],
  [],
  [],
  [],
  [],
  [wRook(200), wKnight(150), wBishop(100), wQueen(50), wKing(), wBishop(- 50), wKnight( - 100), wRook( - 150)]
]

const chessBoardDraw = () => {
  for (let x = 1; x < 64; x++) {

  }
}
