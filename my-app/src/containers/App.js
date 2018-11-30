import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
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
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div >
          <Persons
          persons={this.state.persons}
          clicked ={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
        </div>
      );
    }
      return (
        <StyleRoot>
        <div className="App" >
          <Cockpit clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}/>
          {persons}
        </div>
        </StyleRoot>
      );
      // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hello there') )
    
  }
}


export default Radium(App);
