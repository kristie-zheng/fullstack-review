import React from 'react';
//attempt to import: import RepoListEntry from '/RepoListEntry.jsx';
const RepoList = (props) => {
  var repos = props.repos;
  console.log(repos);
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
     {/*HERE IS HOW VARIOUS REPOLISTNETRIES WOULD BE RENDERED {repos.map((repo) => <RepoListEntry repo = {repo}/>)} */}
    </div>
  )
}
export default RepoList;