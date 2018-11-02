import React from 'react';
import './label.css';



function Label(props) {
    return(
        <div className="label">
            {props.name}
        </div>
    )
}


export default Label