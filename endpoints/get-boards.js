const fs = require('fs');

exports.getBoards = async (req, res) => {
  const rawdata = fs.readFileSync('boards.json');
  const boards = JSON.parse(rawdata);

  res.status(200).send(boards);
}