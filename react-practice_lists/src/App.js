import React, { Component } from 'react';
import './App.css';
import Paragraph from './Paragraph/Paragraph';
import Validation from './Validation/Validation';
import Char from './Char/Char';
class App extends Component {


  lenghtCheckHandler= (event)=>{
    const lenght= JSON.stringify(event.target.value).length-2;
    this.setState({
      TextValue:event.target.value,
      paragraphLenght:lenght
    })
    console.log("Here look at me!" + lenght)
  }

  state = {
    TextValue : "",
    paragraphLenght:0
  }

  lenghtSplit = (charIndex)=>{
    
    let textState = [...this.state.TextValue];
    
    textState.splice(charIndex,1);
    this.setState({TextValue:textState.join('')})
  }

  render() {

    let characters = (<div>{this.state.TextValue.split('').map((char, index) =>{
      return (<Char 
        index={index} 
        charText={JSON.stringify(char)}
        click = {()=> this.lenghtSplit(index)}
      />)
    })}
    </div>)

    return (
      <div className="App">
        
        <Paragraph 
        changed = {(event)=> this.lenghtCheckHandler(event)}/>
        <Validation TextValue={this.state.paragraphLenght}></Validation>
        {characters}
      </div>
    );
  }
}

export default App;
