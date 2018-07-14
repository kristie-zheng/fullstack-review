import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [{a: 1}, {b: 2}, {c:3}]
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax('/repos', {
      method: 'POST',
      data: JSON.stringify(term),
      error: function(error) {
        console.log('error with post req', error);
      },
      success: function(data) {
        console.log('successfully posted. this was returned from server', data);
      }
    });
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <RepoListEntry />
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));