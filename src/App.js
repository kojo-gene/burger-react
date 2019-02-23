import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'dsfsdf', name: 'Max', age: 28 },
      { id: 'vegs', name: 'Manu', age: 29 },
      { id: 'geads', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //combines new list to the old list
    const person = {
      ...this.state.persons[personIndex]
    };

    //person is from list of states. This will allow the input to change the name value
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //sets the state of original persons list with the new persons list
    this.setState( {persons: persons} );
  }

  //deletes person component at it's index. 
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //says that it will set the state if 
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );

      //adds color before and when hovering. Is directly rendered to the style under button
      style.backgroundColor = 'red';
    }

    //this variable to dynamically change the styling of the paragraph below. Placed in className for paragraph
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}  
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('hi', null, 'Does this work now?'));
  }
}

export default App;
