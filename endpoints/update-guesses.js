const fs = require('fs');

exports.updateGuesses = async (req, res) => {
  const { team, guesses, id } = req.body;

  const rawdata = fs.readFileSync('boards.json');
  const boards = JSON.parse(rawdata);

  const board = boards[id];

  // modifies in-memory guess state
  if (team === 'red') {
    board.redGuesses = guesses;
  } else {
    board.blueGuesses = guesses;
  }

  fs.writeFileSync('boards.json', JSON.stringify(boards));

  res.status(200).send('Success!');
};