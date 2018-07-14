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

let save = (dataString) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var arrayOfRepos = [];
  var data = JSON.parse(dataString);
  for (var i = 0; i < data.length; i++) {
    var repo = {repoData: {}};
    repo.id = data[i].id;
    repo.owner = data[i].owner.login;
    repo.url = data[i].owner.html_url;
    repo.repoData.repoName = data[i].name;
    repo.repoData.repoUrl = data[i].html_url;
    repo.repoData.createdAt = data[i].created_at;
    repo.repoData.updatedAt = data[i].updated_at;
    
    arrayOfRepos.push(repo);
  }
    console.log('this is', arrayOfRepos);
}

module.exports.save = save;