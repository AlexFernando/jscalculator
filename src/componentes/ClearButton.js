import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => {
    return ( 
        <div className="button-symbol clear-button"
            onClick= {() => props.handleClick(props.children)}>
                {props.children}
        </div>

     );
}
 
export default ClearButton;