const fs = require('fs');

exports.getBoards = async (req, res) => {
  const rawdata = fs.readFileSync('boards.json');
  console.log('raw data: ', rawdata);
  console.log('parsing json...');
  const boards = JSON.parse(rawdata);
  console.log('boards: ', boards);

  res.status(200).send(boards);
}