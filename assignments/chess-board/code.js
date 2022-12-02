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

checkerboard(8, 'red', 'blue')


const blackPieces = {'BlackRook' :'♜', 'BlackKing' : '♚', 'BlackQueen' : '♛', 'BlackBishop' :'♝', 'BlackKnight' : '♞', 'BlackPawn' : '♟'}

const whitePieces = {'WhiteKing' : '♔', 'WhiteQueen' : '♕', 'WhiteRook' : '♖', 'WhiteBishop' : '♗', 'WhiteKnight' : '♘', 'WhitePawn' : '♙'}

// Example of drawing one of the pieces
const bPawn = (space) => {
  drawText(blackPieces.BlackPawn, width/2 - space, height/2 - 120, 'black', 50)
}

const wKing = (space) => {
  drawText(whitePieces.WhiteKing, width/2 - space, height/2 + 145, 'black', 50);
}

const wQueen = (space) => {
   drawText(whitePieces.WhiteQueen, width/2 - space, height/2 + 145, 'black', 50);
}

const wRook = (space) => {
   drawText(whitePieces.WhiteRook, width/2 - space, height/2 + 145, 'black', 50);
}

const wKnight = (space) => {
  drawText(whitePieces.WhiteKnight, width/2 - space, height/2 + 145, 'black', 50);
}

const wBishop = (space) => {
  drawText(whitePieces.WhiteBishop, width/2 - space, height/2 + 145, 'black', 50);
}

const bKing = (space) => {
  drawText(blackPieces.BlackKing, width/2 - space, height/2 - 120, 'black', 50);
}

const bQueen = (space) => {
  drawText(blackPieces.BlackQueen, width/2 - space, height/2 - 120, 'black', 50)
}

const bBishop = (space) => {
  drawText(blackPieces.BlackBishop, width/2 - space, height/2 - 120, 'black', 50)
}

const bKnight = (space) => {
    drawText(blackPieces.BlackKnight, width/2 - space, height/2 - 120, 'black', 50)
}

const bRook = (space) => {
    drawText(blackPieces.BlackRook, width/2 - space, height/2 - 120, 'black', 50)
}

const chessBoard = [
  [bRook(146), bKnight(110), bBishop(70), bQueen(34), bKing(-4), bBishop(- 40), bKnight(- 75), bRook(-115)],
  [bPawn(), bPawn(), bPawn(), bPawn(), bPawn(), bPawn(), bPawn(), bPawn()],
  [],
  [],
  [],
  [],
  [],
  [wRook(146), wKnight(110), wBishop(70), wQueen(34), wKing(- 5), wBishop(- 40), wKnight( - 75), wRook( - 115)]
]


