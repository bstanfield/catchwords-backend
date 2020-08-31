const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3333;

app.use(cors());

const bodyParser = require('body-parser');
const { getExistingBoard } = require('./endpoints/get-existing-board');
const { addWord } = require('./endpoints/add-word');
const { getNewBoard } = require('./endpoints/get-new-board');
const { swapWord } = require('./endpoints/swap-word');
const { updateGuesses } = require('./endpoints/update-guesses');
const { updateTurn } = require('./endpoints/update-turn');
const { getBoards } = require('./endpoints/get-boards');
const { getWords } = require('./endpoints/get-words');

// bodyParser middleware to help parse JSON
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => console.log(`Listening on port localhost:${port}`));

// Standard messages
app.get('/', (req, res) => {
  res.json({ info: 'Hello world!' })
});

app.get('/api/get-existing-board/:board', async (req, res) => {
  await getExistingBoard(req, res);
});

app.post('/api/add-word', async (req, res) => {
  await addWord(req, res);
});

app.post('/api/get-words', async (req, res) => {
  await getWords(req, res);
});

app.post('/api/update-guesses', async (req, res) => {
  await updateGuesses(req, res);
});

app.post('/api/update-turn', async (req, res) => {
  await updateTurn(req, res);
});

app.get('/api/get-new-board', async (req, res) => {
  await getNewBoard(req, res);
});

app.get('/api/get-boards', async (req, res) => {
  await getBoards(req, res);
});

app.get('/api/swap-word/:id/:index', async (req, res) => {
  await swapWord(req, res);
});
