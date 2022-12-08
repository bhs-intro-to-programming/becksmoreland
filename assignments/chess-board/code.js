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


const blackPieces = { 'Rook': '♜', 'King': '♚', 'Queen': '♛', 'Bishop': '♝', 'Knight': '♞', 'Pawn': '♟' }

const whitePieces = { 'King': '♔', 'Queen': '♕', 'Rook': '♖', 'Bishop': '♗', 'Knight': '♘', 'Pawn': '♙' }

// Example of drawing one of the pieces
const wPawn = (space) => {
  drawText(whitePieces.Pawn, width / 2 - space, height / 2 + 75, 'black', 35)
}

const bPawn = (space) => {
  drawText(blackPieces.Pawn, width / 2 - space, height / 2 - 57, 'black', 35)
}

const wKing = (space) => {
  drawText(whitePieces.King, width / 2 - space, height / 2 + 105, 'black', 35);
}

const wQueen = (space) => {
  drawText(whitePieces.Queen, width / 2 - space, height / 2 + 105, 'black', 35);
}

const wRook = (space) => {
  drawText(whitePieces.Rook, width / 2 - space, height / 2 + 105, 'black', 35);
}

const wKnight = (space) => {
  drawText(whitePieces.Knight, width / 2 - space, height / 2 + 105, 'black', 35);
}

const wBishop = (space) => {
  drawText(whitePieces.Bishop, width / 2 - space, height / 2 + 105, 'black', 35);
}

const bKing = (space) => {
  drawText(blackPieces.King, width / 2 - space, height / 2 - 89, 'black', 35);
}

const bQueen = (space) => {
  drawText(blackPieces.Queen, width / 2 - space, height / 2 - 89, 'black', 35)
}

const bBishop = (space) => {
  drawText(blackPieces.Bishop, width / 2 - space, height / 2 - 85, 'black', 35)
}

const bKnight = (space) => {
  drawText(blackPieces.Knight, width / 2 - space, height / 2 - 89, 'black', 35)
}

const bRook = (space) => {
  drawText(blackPieces.Rook, width / 2 - space, height / 2 - 89, 'black', 35)
}

const chessBoard = [
  [bRook(107), bKnight(80), bBishop(53), bQueen(25), bKing(-2), bBishop(- 29), bKnight(- 56), bRook(-85)],
  [bPawn(107), bPawn(80), bPawn(53), bPawn(25), bPawn(-2), bPawn(-29), bPawn(-56), bPawn(-85)],
  [],
  [],
  [],
  [],
  [wPawn(107), wPawn(80), wPawn(53), wPawn(25), wPawn(-2), wPawn(-29), wPawn(-56), wPawn(-85)],
  [wRook(107), wKnight(80), wBishop(53), wQueen(25), wKing(- 5), wBishop(- 29), wKnight(- 56), wRook(- 85)]
]

