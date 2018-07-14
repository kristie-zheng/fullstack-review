const request = require('request');
const config = require('../config.js');
// var $ = require('../node_modules/jquery/dist/jquery.js');
var jquery = require('jquery');

let getReposByUsername = (username) => {
  console.log('HEY');
  console.log(jquery);
  // The options object has been provided to help you out, but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/zhengjames/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(error, response, body){
    if (error) {
      console.log('error', error);
    } else {
      console.log('success', response)
    }
  })

}

module.exports = getReposByUsername;

  // TODO - Use the request module to request repos for a specific
  // user from the github API
