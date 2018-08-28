import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jørgen', age: 25},
      { name: 'Kari', age: 29},
      { name: 'Stella', age: 28}
    ],
    
    otherState: 'some other state'
  }
  
  switchNameHandler = (newName) => {
    console.log('Was clicked');
   // Dont do this this.state.Persons[0].name = "Johansen"
   this.setState( {
     persons: [
        { name: newName, age: 25},
        { name: 'Kari', age: 29},
        { name: 'Dog', age: 29}
     ]
   } )
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, i'm a react app </h1>
       <p>This is working</p>
      <button onClick={() => this.switchNameHandler("Jørgen!!!!")}>Switch Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Johansen!!')}> My hobbies: Football </Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'dose this work now?'));
  }
}

export default App;
