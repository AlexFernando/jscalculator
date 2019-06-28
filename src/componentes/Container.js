import React, { Component } from 'react';
import './Container.css';
import Buttons from './Buttons';

class Container extends Component {

    render() { 
        return ( 
            <div className="container">
                <div className="my-result">
                    {this.props.result}
                </div>
                <Buttons 
                    
                />
            </div>
         );
    }
}
 
export default Container;