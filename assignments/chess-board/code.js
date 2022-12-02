const checkerboard = (n, color1, color2) => {
  const bigSquareSide = Math.min(width, height)
  const squareSide = bigSquareSide / n
  const widthExtra = (width - bigSquareSide) / 2
  const heightExtra = (height - bigSquareSide) / 2
  drawFilledRect(Math.max(widthExtra, heightExtra), 0, bigSquareSide, bigSquareSide, color1)
  for (let i = 0; i < n; i++) {
    for (let j = i % 2; j < n; j += 2) {
      drawFilledRect(j * squareSide + widthExtra, i * squareSide + heightExtra, squareSide, squareSide, color2)
    }
  }
}

checkerboard(9, 'black', 'white')


const blackPieces = {'BlackRook' :'♜', 'BlackKing' : '♚', 'BlackQueen' : '♛', 'BlackBishop' :'♝', 'BlackKnight' : '♞', 'BlackPawn' : '♟'}

const whitePieces = {'WhiteKing' : '♔', 'WhiteQueen' : '♕', 'WhiteRook' : '♖', 'WhiteBishop' : '♗', 'WhiteKnight' : '♘', 'WhitePawn' : '♙'}

// Example of drawing one of the pieces
const wKing = () => {
  drawText(whitePieces.WhiteKing, width/2, height/2 + 100, 'black', 50);
}

const wQueen = (space) => {
   drawText(whitePieces.WhiteQueen, width/2 - space, height/2 + 100, 'black', 50);
}

const wRook = (space) => {
   drawText(whitePieces.WhiteRook, width/2 - space, height/2 + 100, 'black', 50);
}

const wKnight = (space) => {
  drawText(whitePieces.WhiteKnight, width/2 - space, height/2 + 100, 'black', 50);
}

const wBishop = (space) => {
  drawText(whitePieces.WhiteBishop, width/2 - space, height/2 + 100, 'black', 50);
}

const bKing = () => {
  drawText(blackPieces.BlackKing, width/2, height/2 - 75, 'black', 50);
}

const bQueen = (space) => {
  drawText(blackPieces.BlackQueen, width/2 - space, height/2 - 75, 'black', 50)
}

const bBishop = (space) => {
  drawText(blackPieces.BlackBishop, width/2 - space, height/2 - 75, 'black', 50)
}

const bKnight = (space) => {
    drawText(blackPieces.BlackKnight, width/2 - space, height/2 - 75, 'black', 50)
}

const bRook = (space) => {
    drawText(blackPieces.BlackRook, width/2 - space, height/2 - 75, 'black', 50)
}

const chessBoard = [
  [bRook(50), bKnight(175), bBishop(100), bQueen(50), bKing(), bBishop(- 50), bKnight(- 100), bRook(-150)],
  [],
  [],
  [],
  [],
  [],
  [],
  [wRook(200), wKnight(150), wBishop(100), wQueen(50), wKing(), wBishop(- 50), wKnight( - 100), wRook( - 150)]
]


