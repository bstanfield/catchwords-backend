const { getRandomWords } = require('../data');
const fs = require('fs');

exports.swapWord = async (req, res) => {
  const { id, index } = req.params;

  const rawdata = fs.readFileSync('boards.json');
  const boards = JSON.parse(rawdata);

  const newWord = getRandomWords(1)[0];
  boards[id].words[index] = newWord;



  res.status(200).send({
    word: newWord,
  });
}