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
    
    otherState: 'some other state',
    showPersons: false
  }
  
  //
  switchNameHandler = (newName) => {
    console.log('Was clicked');
   // Dont do this this.state.Persons[0].name = "Johansen"
   // Endrer teksten ved trykk på kanppen (onClicked)
   this.setState( {
     persons: [
        { name: newName, age: 25},
        { name: 'Kari', age: 29},
        { name: 'Dog', age: 29}
     ]
   } )
  }

  // Endrer hva som blir vist live fra inputfeltet 
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
         { name: 'Jørgen', age: 27},
         { name: event.target.value, age: 29},
         { name: 'Dog', age: 29}
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({showPersons: !doseShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
       <h1>Hi, i'm a react app </h1>
       <p>This is working</p>
      <button
       style={style}
       onClick={() => this.togglePersonsHandler()}>Switch Name</button>
       {
         this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              click={this.switchNameHandler.bind(this, 'Johansen!!')}
              changed ={this.nameChangedHandler}> My hobbies: Football </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> : null
        } 
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'dose this work now?'));
  }
}

export default App;
