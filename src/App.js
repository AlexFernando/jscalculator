import React, { Component } from 'react'
import './App.css';
import Container from './componentes/Container';

class App extends Component {
  state = {
      result : 0
  }

  render () {
    return(
      <div className="fullscreenDiv">
        <Container 
          result = {this.state.result}
        />
      </div>
    )
  }
}

export default App;
