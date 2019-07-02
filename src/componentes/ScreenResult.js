import React, { Component } from 'react';
import './ScreenResult.css'

class ScreenResult extends Component {

    render() { 
        return (
            <div className= " ">
                {this.props.expression}
                {this.props.result}
            </div>
        );
    }
}
 
export default ScreenResult;