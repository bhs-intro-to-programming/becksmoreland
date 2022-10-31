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

// Example of drawing one of the pieces
const wKing = () => {
  drawText(WHITE_KING, width/2, height/2, 'black', 64);
}

const wQueen = () => {
   drawText(WHITE_QUEEN, width/2, height/2, 'black', 64);
}

const wRook = () => {
   drawText(WHITE_ROOK, width/2, height/2, 'black', 64);
}

const wKnight = () => {
  drawText(WHITE_KNIGHT, width/2 - 100, height/2, 'black', 64);
}

const wBishop = () => {
  drawText(WHITE_BISHOP, width/2 - 100, height/2, 'black', 64);
}

const chessBoard = [
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [wRook()], [wKnight()], [wBishop()], [wQueen()], [wKing()], [wBishop()], [wKnight()], [wRook()],
]

chessBoard()