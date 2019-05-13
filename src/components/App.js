import React, { Component }from 'react';
import './styles/App.css';
import PokeList from './PokeList';

class App extends Component {
  constructor() { //where we initialize our state
    super(); //we are extending from the component class
    this.state = {};
  }

  render() {
    return(
      <div className="App">
      <PokeList />
      </div>
    ); 
  }
}

export default App;
