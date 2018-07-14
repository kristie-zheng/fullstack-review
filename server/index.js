const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github');
var jquery = require('jquery');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); //NEED TO INCLUDE THIS EVEN THOUGH ITS JSON. URL ENCODED = IN URL BAR SPECIAL CHARACTERS BEHAVE DIFF

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '../node_modules/'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var githubHandle = getReposByUsername(Object.keys(req.body)[0].slice(1, -1));
  res.send(req.body);
  res.end(githubHandle);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

