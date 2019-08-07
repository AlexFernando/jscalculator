import React, { Component } from 'react'
import './App.css';
import Button from './componentes/Button';
import ScreenResult from './componentes/ScreenResult';
import ClearButton from './componentes/ClearButton';

var math = require('mathjs');

class App extends Component {
  state = {
    result : "0",
    expression: ""
  }

  displayExpression = value => {

    if(this.state.result === "0") {
      this.setState({
        result: value,
        expression : this.state.expression + value
      })
    }
    else {
      this.setState({
        result: this.state.result + value,
        expression : this.state.expression + value
      });
    }
  } 

  equalOperation = () => {
    this.setState({
      result: math.evaluate(this.state.result),
      expression : this.state.expression + "=" + math.evaluate(this.state.result)
    })
  }

  changeMultiplyOperator = (val) => {
    if(val === "x") {
      this.setState({
        result: this.state.result + val.replace("x", "*"),
        expression: this.state.expression + val
      })
    }
  }

  displayDecimalPoint = value => {

      this.setState({
        result : this.state.result + value,
        expression: this.state.expression + value,
      })
  
  }

  clearOperation = () => {
    this.setState({
      result: "0",
      expression: "",
    })
  }

  render () {

    return(
      <div className="fullscreenDiv">
          <div className="buttons-container"> 
              <h3 className="title">JS Vintage Calculator</h3>
              <ScreenResult result = {this.state.result} expression= {this.state.expression} />
              
              <div className="row-buttons">
                <Button  handleClick={this.displayExpression}>7</Button>
                <Button  handleClick={this.displayExpression}>8</Button>
                <Button  handleClick={this.displayExpression}>9</Button>
                <Button  handleClick={this.displayExpression}>+</Button>
              </div>
              
              <div className="row-buttons">
                <Button  handleClick={this.displayExpression}>4</Button>
                <Button  handleClick={this.displayExpression}>5</Button>
                <Button  handleClick={this.displayExpression}>6</Button>              
                <Button  handleClick={this.displayExpression}>-</Button>
              </div>
               
              
              <div className="row-buttons">
                <Button  handleClick={this.displayExpression}>1</Button>
                <Button  handleClick={this.displayExpression}>2</Button>
                <Button  handleClick={this.displayExpression}>3</Button>
                <Button  handleClick={this.changeMultiplyOperator}>x</Button>
              </div>

              <div className="row-buttons">
                <Button  handleClick={this.displayExpression}>0</Button>
                <Button  handleClick={this.displayDecimalPoint}>.</Button>
                <Button  handleClick={this.equalOperation}>=</Button>
                <Button  handleClick={this.displayExpression}>/</Button>
              </div>
              
              <div className="row-buttons">
                <ClearButton  handleClick={this.clearOperation}>Clear</ClearButton>
              </div>
          </div>
      </div>

    )
  }
}

export default App;
