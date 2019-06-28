import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
   
    render() { 
        return ( 
            <div className="button-symbol">
                <p className="grow">{this.props.symbol}</p>
            </div>
         );
    }
}
 
export default Button;