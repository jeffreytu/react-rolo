import React, { Component } from 'react';
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
      {
        this.state.consoles.map(console => (
          <h1 key={console.id}>{ console.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
