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
    this.handleGetRequest = this.handleGetRequest.bind(this);

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
        console.log(context);
        context.handleGetRequest();
      }
    });
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  handleGetRequest () {
    var context = this;
    console.log('context is', context);
    $.ajax('/repos', {
      method: 'GET',
      error: function(error) {
        console.log('error with get req', error);
      },
      success: function(data) {
        console.log('successfully gotten', data);
        console.log('about to set the state!')
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