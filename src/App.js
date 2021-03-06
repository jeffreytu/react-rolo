import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {

  constructor() {

    super();
    
    this.state = {
      players: [],
      searchField: '',
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({players: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { players, searchField } = this.state;
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Players Index</h1>
        <SearchBox
          placeholder='search players'
          handleChange={this.handleChange}
        />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}

export default App;
