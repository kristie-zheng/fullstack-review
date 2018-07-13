const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number, //Number, which is received from the API call
  owner: String, //user's github handle
  url: String,//url of the user's page
  repos: [{name: String, repoUrl: String, createdAt: Date, updatedAt: Date}] //an array of the owner's repos[{}, {}, {}] //each repo should have {name, repoUrl, createdAt, updatedAt}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;