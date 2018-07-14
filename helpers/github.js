const request = require('request');
const config = require('../config.js');
const mongodatabase = require('../database/index.js')

let getReposByUsername = (username) => {
  // The options object has been provided to help you out, but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  //the result of the request is sent to the 'save' function in the DB module
  request(options, function(error, response, body){
    if (error) {
      console.log('error', error);
    } else {
      console.log('successfully retrieved data from github api');
      mongodatabase.save(body);
    }
  })

}

module.exports = getReposByUsername;

  // TODO - Use the request module to request repos for a specific
  // user from the github API
