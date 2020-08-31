const fs = require('fs');

exports.addWord = async (req, res) => {
  const { name } = req.body;

  const rawdata = fs.readFileSync('words.json');
  const words = JSON.parse(rawdata);

  if (words.includes('name')) {
    return res.status(422).send('Error: word already exists in database');
  }

  words.push(name);
  fs.writeFileSync('words.json', JSON.stringify(words));
  res.status(200).send({ success: `word ${name} added` });
};