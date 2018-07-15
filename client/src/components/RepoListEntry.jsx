import React from 'react';


var RepoListEntry = (props) => {
  var repo = props.repo;
  console.log(repo)
  return (
  <div>
  <h4>Here is a repo list entry</h4>
  <ul> 
    <li>Name: {repo.repoName}</li>
    <li>URL: <a href='github.com'/>{repo.repoUrl}</li>
    <li>Created By: {repo.owner}</li>
    <li>Created at: {repo.createdAt} </li>
    <li>Last Updated: {repo.updatedAt} </li>
  </ul>
  </div>
  )
}

export default RepoListEntry;