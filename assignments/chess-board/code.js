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
const wKing = (space) => {
  drawText(WHITE_KING, width/2, height/2, 'black', 64);
}

const wQueen = (space) => {
   drawText(WHITE_QUEEN, width/2 - space, height/2, 'black', 64);
}

const wRook = (space) => {
   drawText(WHITE_ROOK, width/2 - space, height/2 , 'black', 64);
}

const wKnight = (space) => {
  drawText(WHITE_KNIGHT, width/2 - space, height/2, 'black', 64);
}

const wBishop = (space) => {
  drawText(WHITE_BISHOP, width/2 - space, height/2 + 100, 'black', 64);
}

const chessBoard = [
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [], [], [], [], [], [], [], [],
  [wRook(200)], [wKnight(150)], [wBishop(100)], [wQueen(50)], [wKing()], [wBishop(- 50)], [wKnight( - 100)], [wRook( - 150)],
]

chessBoard()