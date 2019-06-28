import React, { Component } from 'react';
import Button from './Button';
import './Buttons.css';

class Buttons extends Component {
   
    state = {
        mySymbols : ['AC', '/', 'x','-', '7', '8','9','+', '4', '5', '6', '=', '1', '2', '3', '.', '0']
    }

    render() { 
    
        return ( 
            <div className="flex-container">
                   {
                       this.state.mySymbols.map(symbol => (
                           <Button 
                                symbol = {symbol}
                           />
                       ))
                   } 
            </div>
            
         );
    }
}
 
export default Buttons;