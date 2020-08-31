const fs = require('fs');
exports.getExistingBoard = async (req, res) => {
  const id = req.params.board;

  const rawdata = fs.readFileSync('boards.json');
  const boards = JSON.parse(rawdata);
  const board = boards[id];

  res.status(200).send(board);
}