import React from 'react';

const validation = (props) => {
    let validation="";
    if (props.TextValue<=5){
        validation = "Text too short."
    }
    else{
        validation = "Text is OKAY!"
    }
    return <p>{validation}</p>
}
export default validation;