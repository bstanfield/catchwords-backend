const fs = require('fs');

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const getRandomWords = (total) => {
  const rawdata = fs.readFileSync('words.json');
  const words = JSON.parse(rawdata);
  const randomWords = shuffle(words).slice(0, total);
  return randomWords;
};

module.exports = {
  getRandomWords,
}