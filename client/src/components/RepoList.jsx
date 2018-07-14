import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => {
  var repos = props.repos;
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      {console.log(repos)}
     {repos.map((repo) => <RepoListEntry repo = {repo}/>)} 
    </div>
  )
}
export default RepoList;