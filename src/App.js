import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      consoles: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({consoles: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList consoles={this.state.consoles} />
      </div>
    );
  }
}

export default App;
