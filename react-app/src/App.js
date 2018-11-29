import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium';
class App extends Component {
  state={
    persons:[
      {id:'adsdas',name:"a",age:"1"},
      {id:'weqwe',name:"b",age:"2"},
      {id:'dsasq1',name:"c",age:"3"},
      {id:'ewqe1',name:"d",age:"4"}],
    otherState:"data",
    showPersons: false
  }

  nameChangedHandler= (event,id) =>{
    const personIndex =this.state.persons.findIndex(p=>{
      return p.id ===id;
    });
    let person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;


    let newPersons= [...this.state.persons];
    newPersons[personIndex] = person;
    this.setState({ persons : newPersons});
  }

  togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState(
      {
        showPersons: doesShow
      }
    )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }


  render() {
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
      if(this.state.showPersons){
        style.backgroundColor = 'red';
        style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
      }

      let classes= [];
      if (this.state.persons.length <= 2){
        classes.push('red');
      }
      if (this.state.persons.length <= 1){
        classes.push('bold');
      }
      let persons = null;
      if (this.state.showPersons){
        persons = (
          <div >
            {this.state.persons.map((person, index) => {
              return(
                <Person name={person.name}
                age = {person.age}
                click = {()=> this.deletePersonHandler(index)}
                key= {person.id}
                changed={(event) => this.nameChangedHandler(event,person.id)}/>
              )
            })}
          </div>
        );
      }
      return (
        <StyleRoot>
        <div className="App" >
        <h1> HI I AM A REACT APP</h1>
        <p className={classes.join(' ')}>It's working!</p>
          <button 
          onClick={this.togglePersonsHandler}
          style={style}>Don't click it!</button>
          {persons}
        </div>
        </StyleRoot>
      );
      // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hello there') )
    
  }
}


export default Radium(App);
