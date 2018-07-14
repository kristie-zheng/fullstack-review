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
  var necessaryFields = ['repoName', 'repoUrl', 'createdAt', 'updatedAt'];
  var apiDataVarNames = ['name', 'html_url', 'created_at', 'updated_at'];
  var data = JSON.parse(dataString);
  var id;
  var owner;
  var url;
  for (var i = 0; i < data.length; i++) {
    var repo = {};
    for (var j = 0; j < necessaryFields.length; j++) {
      repo[necessaryFields[j]] = data[i][apiDataVarNames[j]]; //doesn't work to insert into subobject due to bracket notation
    }
    id = data[i].id;
    owner = data[i].owner.login;
    url = data[i].owner.html_url;
    arrayOfRepos.push(repo);
  }
  console.log(arrayOfRepos);
    for (var j = 0; j < arrayOfRepos.length; j++) {
      var objectToInsert = {
        id: id,
        owner: owner,
        url: url, 
        repos: arrayOfRepos
      };
      var repoInstance = new Repo(objectToInsert);
    }
      repoInstance.save(function(error, instance) {
        if (error) {
          console.log('error saving to mongob', error);
        } else {
          console.log('successfully saved this record', instance);
        }
      });

    // Repo.find(function(error, repos) {
    //   if (error) {
    //     console.log('error finding the repos', error);
    //   } else {
    //     console.log('here are the repos');
    //   }
    // });
}

module.exports.save = save;