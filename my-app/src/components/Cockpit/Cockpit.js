import React from 'react';
import './Cockpit.css'
const cockpit = (props) =>{
    const style ={
        backgroundColor:'white',
        font:'inherit',
        border: '1px solid blue',
        backgroundColor : 'green',
        padding: '8px',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'green'
        }
      };
      if(props.showPersons){
        style.backgroundColor = 'red';
        style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
      }

      let classes= [];
      if (props.persons.length <= 2){
        classes.push('red');
      }
      if (props.persons.length <= 1){
        classes.push('bold');
      }
      

    return (
        <div>
            <h1> HI I AM A REACT APP</h1>
        <p className={classes.join(' ')}>It's working!</p>
          <button 
          onClick={props.clicked}
          style={style}>Don't click it!</button>
        </div>
    )
}
export default cockpit;