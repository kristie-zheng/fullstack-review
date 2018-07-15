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
      repos: []
    };
  }

  search (term) {
    let context = this;
    console.log(`${term} was searched`);
    $.ajax('/repos', {
      method: 'POST',
      data: JSON.stringify(term),
      error: function(error) {
        console.log('error with post req', error);
      },
      success: function(data) {
        console.log('successfully posted. this was returned from server', data);
        //context.handleGetRequest();
      }
    });
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  handleGetRequest () {
    let context = this;
    $.ajax('/repos', {
      method: 'GET',
      error: function(error) {
        console.log('error with get req', error);
      },
      success: function(data) {
        console.log('successfully gotten', data);
        context.setState({repos: data});
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
  
  componentDidMount() {
    this.handleGetRequest();
  }
}


ReactDOM.render(<App />, document.getElementById('app'));