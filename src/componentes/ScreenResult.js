import React, { Component } from 'react';
import './ScreenResult.css'

class ScreenResult extends Component {

    render() { 
        return (
            <div className= "my-result">
                <p>Expression {this.props.expression}</p>
                <p>result {this.props.result}</p>
            </div>
        );
    }
}
 
export default ScreenResult;