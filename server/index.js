const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); //NEED TO INCLUDE THIS EVEN THOUGH ITS JSON. URL ENCODED = IN URL BAR SPECIAL CHARACTERS BEHAVE DIFF

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send(req.body);
  getReposByUsername();
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

