import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
      { name: 'Jørgen', age: 25},
      { name: 'Kari', age: 26},
      { name: 'Stella', age: 28}
    ] 
  }
  
  switchNameHandler = () => {
    console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, i'm a react app </h1>
       <p>This is working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age}/>
       <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age}/>
       <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'dose this work now?'));
  }
}

export default App;
