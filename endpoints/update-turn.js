const fs = require('fs');

exports.updateTurn = async (req, res) => {
  const { turnCount, id } = req.body;

  const rawdata = fs.readFileSync('boards.json');
  const boards = JSON.parse(rawdata);

  const board = boards[id];
  if (board) {
    board.turnCount = turnCount;
  }

  fs.writeFileSync('boards.json', JSON.stringify(boards));
  
  res.status(200).send('Success!');
};