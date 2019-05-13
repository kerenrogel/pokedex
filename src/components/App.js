import React, { Component }from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import DetailView from './DetailView';

class App extends Component {
  constructor() { //where we initialize our state
    super(); //we are extending from the component class
    this.state = {};
  }

  render() {
    return(
      <div className="App">
      <PokeList />
      <DetailView />
      </div>
    ); 
  }
}

export default App;
