import React from 'react';
import "./Char.css"
const char = (props) => {
    return <div className = "Char">
    <p onClick={props.click}>LA LETRA: {props.charText} el index {props.index}</p>
    </div>
}

export default char;