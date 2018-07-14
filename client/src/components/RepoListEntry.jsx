import React from 'react';


var RepoListEntry = (props) => {
  console.log(props)
  return (
  <div>
  <h4>Here is a repo list entry</h4>
  <ul>
    <li>Username: </li>
    <li>GitHub Link: </li>
    <li> Repos: 
    <ul> 
      <li>Name: </li>
      <li>URL: </li>
      <li>Created at: </li>
      <li>Last Updated: </li>
    </ul>
      </li>
    </ul>
  </div>
  )
}

export default RepoListEntry;