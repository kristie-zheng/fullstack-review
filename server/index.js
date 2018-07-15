const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github');
const $ = require('jquery');
const mongodatabase = require('../database/index.js')
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); //NEED TO INCLUDE THIS EVEN THOUGH ITS JSON. URL ENCODED = IN URL BAR SPECIAL CHARACTERS BEHAVE DIFF

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '../node_modules/'));

app.post('/repos', function (req, res) {
  var githubHandle = getReposByUsername(Object.keys(req.body)[0].slice(1, -1));
  res.send(req.body);
  res.end(githubHandle);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //get the repos from the database, specifically the 25 most recently updated
  //this set of repos, an array [send by mongodb], needs to be set as a state variable for the repoList view
  //var 
  //res.send()
  
  mongodatabase.query(function(error, data) {
    if (error) {
      res.send('error with query!');
      return;
    } else {
      console.log('data returned from query!', data);
      res.send(data);
    }
    res.end();
  });
});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

