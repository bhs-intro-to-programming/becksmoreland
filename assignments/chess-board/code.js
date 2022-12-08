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
  drawText(whitePieces.Pawn, width / 2 - space, height / 2 + 105, 'black', 50)
}

const bPawn = (space) => {
  drawText(blackPieces.Pawn, width / 2 - space, height / 2 - 77, 'black', 50)
}

const wKing = (space) => {
  drawText(whitePieces.King, width / 2 - space, height / 2 + 145, 'black', 50);
}

const wQueen = (space) => {
  drawText(whitePieces.Queen, width / 2 - space, height / 2 + 145, 'black', 50);
}

const wRook = (space) => {
  drawText(whitePieces.Rook, width / 2 - space, height / 2 + 105, 'black', 35);
}

const wKnight = (space) => {
  drawText(whitePieces.Knight, width / 2 - space, height / 2 + 145, 'black', 30);
}

const wBishop = (space) => {
  drawText(whitePieces.Bishop, width / 2 - space, height / 2 + 145, 'black', 50);
}

const bKing = (space) => {
  drawText(blackPieces.King, width / 2 - space, height / 2 - 119, 'black', 50);
}

const bQueen = (space) => {
  drawText(blackPieces.Queen, width / 2 - space, height / 2 - 119, 'black', 50)
}

const bBishop = (space) => {
  drawText(blackPieces.Bishop, width / 2 - space, height / 2 - 119, 'black', 50)
}

const bKnight = (space) => {
  drawText(blackPieces.Knight, width / 2 - space, height / 2 - 119, 'black', 50)
}

const bRook = (space) => {
  drawText(blackPieces.Rook, width / 2 - space, height / 2 - 119, 'black', 50)
}

const chessBoard = [
  [bRook(146), bKnight(110), bBishop(70), bQueen(34), bKing(-4), bBishop(- 40), bKnight(- 75), bRook(-115)],
  [bPawn(146), bPawn(110), bPawn(70), bPawn(34), bPawn(-4), bPawn(-40), bPawn(-75), bPawn(-115)],
  [],
  [],
  [],
  [],
  [wPawn(146), wPawn(110), wPawn(70), wPawn(34), wPawn(-5), wPawn(-40), wPawn(-75), wPawn(-115)],
  [wRook(100), wKnight(100), wBishop(70), wQueen(34), wKing(- 5), wBishop(- 40), wKnight(- 75), wRook(- 85)]
]

