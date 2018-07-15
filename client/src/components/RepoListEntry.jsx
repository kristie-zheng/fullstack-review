import React from 'react';


var RepoListEntry = (props) => {
  var repo = props.repo;
  console.log(repo)
  return (
  <div>
  <h4>{repo.repoName}</h4>
  <ul> 
    <li>URL: <a href={repo.repoUrl}>{repo.repoUrl}</a></li>
    <li>Created By: {repo.owner}</li>
    <li>Created at: {repo.createdAt} </li>
    <li>Last Updated: {repo.updatedAt} </li>
  </ul>
  </div>
  )
}

export default RepoListEntry;

