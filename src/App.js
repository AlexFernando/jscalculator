import React, { Component } from 'react'
import './App.css';
import Button from './componentes/Button';
import ScreenResult from './componentes/ScreenResult';

class App extends Component {
  state = {
      result : "",
      operator : "",
      prevNumber : "",
      expression: ""
  }


  displayExpression = value => {

    if( isNaN(this.state.result)){
      this.setState({
        result: value,
        expression: this.state.expression + value
      })
    }  
    else {
      this.setState({
        result : this.state.result + value,
        expression: this.state.expression + value
      })
    }
  }  

  displayDecimalPoint = value => {
    console.log(this.state.result)
    if(this.state.result.indexOf(".") === -1 ){
      
      this.setState({
        result : this.state.result + value,
        expression: this.state.expression + value
      })
    }
  }

  addOperation = () => {
      {/*el numero que ya tengo antes de presionar + */}
    this.setState({
      prevNumber: this.state.result,
      result : "+",
      operator : "plus",
      expression: this.state.expression + "+"
    })
  } 

  minusOperation = () => {
    this.setState({
      prevNumber: this.state.result,
      result : "-",
      operator : "minus",
      expression: this.state.expression + "-"
    })
  }

  multiplyOperation = () => {
    this.setState({
      prevNumber: this.state.result,
      result : "x",
      operator : "multiply",
      expression: this.state.expression + "*"
    })
  }

  divideOperation = () => {
    this.setState({
      prevNumber: this.state.result,
      result : "/",
      operator : "divide",
      expression: this.state.expression + "/"
    })
  }

  clearOperation = () => {
    this.setState({
      result: "",
      expression: "",
      prevNumber: "",
      operator : ""
    })
  }

  equalOperation = () => {
    if(this.state.operator === "plus"){
      this.setState({
        result :  Number(this.state.prevNumber) + Number(this.state.result),
        expression: this.state.expression + " = " + (Number(this.state.prevNumber) + Number(this.state.result))
      })
    }
    else if(this.state.operator === "minus"){
      
      console.log(this.state.result)
      this.setState({
        result : (Number(this.state.prevNumber) -  Number(this.state.result)),
        expression: this.state.expression + " = " + (Number(this.state.prevNumber) - Number(this.state.result))
      })
    }
    else if(this.state.operator === "multiply"){
      this.setState({
        result : (Number(this.state.prevNumber) *  Number(this.state.result)),
        expression: this.state.expression + " = " + (Number(this.state.prevNumber) * Number(this.state.result))
      })
    }

    else if(this.state.operator === "divide"){
      this.setState({
        result : (Number(this.state.prevNumber) /  Number(this.state.result)),
        expression: this.state.expression + " = " + (Number(this.state.prevNumber) / Number(this.state.result))
      })
    }
  }
    

  render () {
    return(
      <div className="fullscreenDiv">
          <ScreenResult result = {this.state.result} expression= {this.state.expression} />
          <div>
            <Button handleClick={this.clearOperation}>AC</Button>
          </div>
          <div>
            <Button handleClick={this.displayExpression}>7</Button>
            <Button handleClick={this.displayExpression}>8</Button>
            <Button handleClick={this.displayExpression}>9</Button>
            <Button handleClick={this.addOperation}>+</Button>
          </div>

          <div>
            <Button handleClick={this.displayExpression}>4</Button>
            <Button handleClick={this.displayExpression}>5</Button>
            <Button handleClick={this.displayExpression}>6</Button>
            <Button handleClick={this.minusOperation}>-</Button>
          </div>

          <div>
            <Button handleClick={this.displayExpression}>1</Button>
            <Button handleClick={this.displayExpression}>2</Button>
            <Button handleClick={this.displayExpression}>3</Button>
            <Button handleClick={this.multiplyOperation}>*</Button>
 
          </div>

          <div>
            <Button handleClick={this.displayExpression}>0</Button>
            <Button handleClick={this.displayDecimalPoint}>.</Button>
            <Button handleClick={this.equalOperation}>=</Button>
            <Button handleClick={this.divideOperation}>/</Button>
          </div>
          
      </div>

    )
  }
}

export default App;
