const request = require('request');
const config = require('../config.js');
const $ = require('jquery');

let getReposByUsername = (/* TODO */) => {
  console.log('HEY')
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/zhengjames/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
   $('h1').css('color', 'green');
   $.ajax('https://api.github.com/users/zhengjames/repos', {
      method: 'GET',
      error: function(error) {
        console.log('error fetching from github', error);
      },
      success: function(data) {
        console.log('here is githubs data', data);
      }
    });
}

module.exports = getReposByUsername;
