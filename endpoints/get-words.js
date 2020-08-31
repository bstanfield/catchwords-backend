const fs = require('fs');

exports.getWords = async (req, res) => {
  const rawdata = fs.readFileSync('words.json');
  const words = JSON.parse(rawdata);
  res.status(200).send({ words });
};