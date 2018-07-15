const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: {type: Number, unique: true}, //Number, which is received from the API call
  ownerId: Number, //user's github id
  owner: String, //user's github handle
  repoUrl: String, //url of the user's page
  repoName: String,
  createdAt: Date,
  updatedAt: Date
});

delete repoSchema['repos'];

console.log('HERE IS SCHEMA', JSON.stringify(repoSchema));

let Repo = mongoose.model('Repo', repoSchema);

let save = (dataString) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
 
  var data = JSON.parse(dataString);
  var repoInstances = createRepoInstances(data);
  for (var i = 0; i < repoInstances.length; i++) {
    var repoInstance = repoInstances[i];
    repoInstance.save(function(error, instance) {
      if (error) {
        console.log('error saving to mongob', error);
      } else {
        console.log('successfully saved this record'/*, instance*/);
        Repo.find().sort('updatedAt').limit(6).exec(function(error, repos) {
          if (error) {
            console.log('error finding the repos', error);
          } else {
            console.log('here are the repos', JSON.stringify(repos, null, 2));
          }
        });
      }
    });
  
  }
  
};

let createRepoInstances = (data) => {
  var arrayOfRepos = [];
  var repoInstances = [];
  var necessaryFields = ['repoId', 'repoUrl', 'repoName', 'createdAt', 'updatedAt'];
  var apiDataVarNames = ['id', 'html_url', 'name', 'created_at', 'updated_at'];
  var fieldsWithSub = ['ownerId', 'owner'];
  var apiDataWithSub = ['owner.id', 'owner.login'];

  for (var i = 0; i < data.length; i++) {
    var repo = {};
    for (let j = 0; j < necessaryFields.length; j++) {
      repo[necessaryFields[j]] = data[i][apiDataVarNames[j]];
    }
    repo.ownerId = data[i].owner.id;
    //console.log('OWNER ID', data[i].owner.id);
    repo.owner = data[i].owner.login;
    arrayOfRepos.push(repo);
    repoInstance = new Repo(repo);
    repoInstances.push(repoInstance);
    //console.log('HERE IS A Array of REPO INSTANCE', repoInstances);
  }

  // repoInstance.repos.push(arrayOfRepos[]);
  return repoInstances;
};

module.exports.save = save;