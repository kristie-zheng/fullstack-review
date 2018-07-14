const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true}, //Number, which is received from the API call
  owner: String, //user's github handle
  url: String,//url of the user's page
  repos: [{repoName: String, repoUrl: String, createdAt: Date, updatedAt: Date}] //an array of the owner's repos[{}, {}, {}] //each repo should have {name, repoUrl, createdAt, updatedAt}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (dataString) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
 
  var data = JSON.parse(dataString);
  var repoInstance = createRepoInstance(data);
  // console.log('HERE IS the repo instance', repoInstance);
  // repoInstance.save(function(error, instance) {
  //   if (error) {
  //     console.log('error saving to mongob', error);
  //   } else {
  //     console.log('successfully saved this record', instance);
  //   }
  // });

    // Repo.find({}).sort('repos.updatedAt').limit(2).exec(function(error, repos) {
    //   if (error) {
    //     console.log('error finding the repos', error);
    //   } else {
    //     console.log('here are the repos', JSON.stringify(repos));
    //   }
    // });
};

let createRepoInstance = (data) => {
  var arrayOfRepos = [];
  var arrayOfRepoInstances = [];
  var necessaryFields = ['repoName', 'repoUrl', 'createdAt', 'updatedAt'];
  var apiDataVarNames = ['name', 'html_url', 'created_at', 'updated_at'];

  for (var i = 0; i < data.length; i++) {
    var repo = {};
    for (let j = 0; j < necessaryFields.length; j++) {
      repo[necessaryFields[j]] = data[i][apiDataVarNames[j]];
    }
    var id = data[i].id;
    var owner = data[i].owner.login;
    var url = data[i].owner.html_url;
    arrayOfRepos.push(repo);
  }
  var repoInstance;
  var objectToInsert = {
    id: id,
    owner: owner,
    url: url, 
    repos: arrayOfRepos
  };
  repoInstance = new Repo(objectToInsert);
  return repoInstance;
};

module.exports.save = save;