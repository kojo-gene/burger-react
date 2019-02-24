import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = null;
    
    if ( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}  
        </div>
    );
  }
}

export default App;
