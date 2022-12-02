const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

const blackPieces = {'BlackRook' :'♜', 'BlackKing' : '♚', 'BlackQueen' : '♛', 'BlackBishop' :'♝', 'BlackKnight' : '♞', 'BlackPawn' : '♟'}

const whitePieces = {'WhiteKing' : '♔', 'WhiteQueen' : '♕', 'WhiteRook' : '♖', 'WhiteBishop' : '♗', 'WhiteKnight' : '♘', 'WhitePawn' : '♙'}

// Example of drawing one of the pieces
const wKing = () => {
  drawText(whitePieces.WhiteKing, width/2, height/2 + 100, 'black', 64);
}

const wQueen = (space) => {
   drawText(WHITE_QUEEN, width/2 - space, height/2 + 100, 'black', 64);
}

const wRook = (space) => {
   drawText(WHITE_ROOK, width/2 - space, height/2 + 100, 'black', 64);
}

const wKnight = (space) => {
  drawText(WHITE_KNIGHT, width/2 - space, height/2 + 100, 'black', 64);
}

const wBishop = (space) => {
  drawText(WHITE_BISHOP, width/2 - space, height/2 + 100, 'black', 64);
}

const bKing = () => {
  drawText(BLACK_KING, width/2, height/2 - 75, 'black', 64);
}

const bQueen = (space) => {
  drawText(BLACK_QUEEN, width/2 - space, height/2 - 75, 'black', 64)
}

const bBishop = (space) => {
  drawText(BLACK_BISHOP, width/2 - space, height/2 - 75, 'black', 64)
}

const bKnight = (space) => {
    drawText(BLACK_KNIGHT, width/2 - space, height/2 - 75, 'black', 64)
}

const bRook = (space) => {
    drawText(BLACK_ROOK, width/2 - space, height/2 - 75, 'black', 64)
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
