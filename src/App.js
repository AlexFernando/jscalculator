import React, { Component } from 'react'
import './App.css';
import Button from './componentes/Button';
import ScreenResult from './componentes/ScreenResult';

class App extends Component {
  state = {
      result : "",
      operator : "",
      prevNumber : "",
      curNumber : "",
      expression: ""
  }



  displayExpression = value => {
    
    this.setState({
      result : this.state.result + value
    })
  }  

  displayDecimalPoint = value => {
    console.log(this.state.result)
    if(this.state.result.indexOf(".") === -1 ){
      
      this.setState({
        result : this.state.result + value
      })
    }
  }

  addOperation = () => {
    this.state.prevNumber = this.state.result; {/*el numero que ya tengo antes de presionar + */}
    this.setState({
      input : "",
    })
    this.state.operator = "add";
    this.setState ({
      expression: this.state.prevNumber + "+"
    })
  } 


  render () {
    return(
      <div className="fullscreenDiv">
          <ScreenResult result = {this.state.result} expression= {this.state.expression} />
          <div>
            <Button handleClick={this.displayExpression}>7</Button>
            <Button handleClick={this.displayExpression}>8</Button>
            <Button handleClick={this.displayExpression}>9</Button>
            <Button handleClick={this.displayExpression}>-</Button>
          </div>

          <div>
            <Button handleClick={this.displayExpression}>4</Button>
            <Button handleClick={this.displayExpression}>5</Button>
            <Button handleClick={this.displayExpression}>6</Button>
            <Button handleClick={this.addOperation}>+</Button>
          </div>

          <div>
            <Button handleClick={this.displayExpression}>1</Button>
            <Button handleClick={this.displayExpression}>2</Button>
            <Button handleClick={this.displayExpression}>3</Button>
            <Button handleClick={this.displayExpression}>=</Button> 
          </div>

          <div>
            <Button handleClick={this.displayExpression}>0</Button>
            <Button handleClick={this.displayDecimalPoint}>.</Button>
          </div>
          
      </div>

    )
  }
}

export default App;
