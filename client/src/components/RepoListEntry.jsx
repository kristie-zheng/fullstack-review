import React from 'react';


var RepoListEntry = (props) => {
  return (
  <div>
  <h4>Here is a repo list entry</h4>
  <ul>
    <li>Username: </li>
    <li>GitHub Link: </li>
    <li> Repos: 
    <ul> 
      <li>Name: </li>
      <li>URL: <a href='github.com'/>here goes the url</li>
      <li>Created at: </li>
      <li>Last Updated: </li>
    </ul>
      </li>
    </ul>
  </div>
  )
}

export default RepoListEntry;