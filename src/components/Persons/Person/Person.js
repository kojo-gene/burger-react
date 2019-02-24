import React from 'react';

import classes from './Person.css';

// person is a component. the function is put into a const variable. 
const person = ( props ) => {
    
    // you return a JSX code that looks like html. you add the brackets to usualable
    // className is what you use for the css
    //when using props, they inherit the properties from other classes
    //props.children will inherit the children of 
    return (
        <div className={classes.Person}> 
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;