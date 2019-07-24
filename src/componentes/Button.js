import React, { Component } from 'react';
import './Button.css'


class Button extends Component {

    myChild  = this.props.children;

    isOperator = ['+', '-', 'x', '/', '='].some((item) => {
        return item === this.props.children;  
    })

    render() {
        console.log(this.isOperator)
        return ( 
            <div className={`button-symbol ${
                this.isOperator ? "color-operator" : ""
            }`}
            
            onClick= {() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
         );
    }
}
 
export default Button;