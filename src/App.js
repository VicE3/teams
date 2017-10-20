import React, { Component } from 'react';
import './App.css';

const initState = {
  allNames: ["Victoria", "Chris", "Malik", "Miguel", "Lesly", "Ivan", "Juan"],
  team1: [],
  team2: []
};


class App extends Component {
  constructor() {
    super();
    this.state = initState;
    this.movingTeamOne = this.movingTeamOne.bind(this);
    this.movingTeamTwo = this.movingTeamTwo.bind(this);
    this.movingTeamUnassigned = this.movingTeamUnassigned.bind(this);
  }



  movingTeamOne(event) {
    let person = event.target.value;
    const copy = Object.assign({}, this.state)
    //indexOf gives you the location of person, if person does not exist it returns -1
    if(this.state.team2.includes(person)) { 
    let theperson = copy.team2.indexOf(person);
    //take the location of person out of all name and push name into team 1
      if(theperson > -1) {
        copy.team2.splice(theperson, 1);
        copy.team1.push(person); 
      }
    } else if (this.state.allNames.includes(person)) {
        let theperson = copy.allNames.indexOf(person);
        //take the location of person out of all name and push name into team 1
          if(theperson > -1) {
            copy.allNames.splice(theperson, 1);
            copy.team1.push(person); 
          }
        }
    this.setState({copy});
  }

  movingTeamTwo(event) {
    let person = event.target.value;
    const copy = Object.assign({}, this.state);
    if(this.state.allNames.includes(person)) {
      let theperson = copy.allNames.indexOf(person);
      if(theperson > -1) {
        copy.allNames.splice(theperson, 1);
        copy.team2.push(person); 
      }
    } else if (this.state.team1.includes(person)) {
      let theperson = copy.team1.indexOf(person);
      if(theperson > -1) {
        copy.team1.splice(theperson, 1);
        copy.team2.push(person); 
      }
    }
    
     this.setState({copy});
  }

  movingTeamUnassigned(event) {
    let person = event.target.value;
    const copy = Object.assign({}, this.state);
    if(this.state.team1.includes(person)) {
      let theperson = copy.team1.indexOf(person);
      if(theperson > -1) {
        copy.team1.splice(theperson, 1);
        copy.allNames.push(person);
        
      }
    } else if(this.state.team2.includes(person)) {
      let theperson = copy.team2.indexOf(person);
      if(theperson > -1) {
        copy.team2.splice(theperson, 1);
        copy.allNames.push(person);
        
      }
    }
    
     this.setState({copy});
  }


  render() {

    const person = this.state.allNames.map(function (name, key) { 
      return( 
      <div> 
        <ul> 
          <li>{name}</li>
            <button value={name} onClick={(event) => {this.movingTeamOne(event)}}>Team One</button>
            <button value={name} onClick={(event) => {this.movingTeamTwo(event)}}>Team Two</button>
        </ul>
      </div>
      );
    } ,this);

    const teamOne = this.state.team1.map(function(name, key) { 
      return( 
      <div> 
        <ul> 
          <li>{name}</li>
            <button value={name} onClick={(event) => {this.movingTeamTwo(event)}}>Team Two</button>
            <button value={name} onClick={(event) => {this.movingTeamUnassigned(event)}}>Unassigned</button>
        </ul>
      </div>
      );
    } ,this);

    const teamTwo = this.state.team2.map(function (name, key) { 
      return( 
      <div> 
        <ul> 
          <li>{name}</li>
            <button value={name} onClick={(event) => {this.movingTeamOne(event)}}>Team One</button>
            <button value={name} onClick={(event) => {this.movingTeamUnassigned(event)}}>Unassigned</button>
        </ul>
      </div>
      );
    } ,this);

    return (
      <div>
        <p>Unassigned</p>
        <div>{person}</div>
        <div>
          <p>Team One</p>
          <div>{teamOne}</div>
       </div>
        <div>
          <p>Team Two</p>
          <ul>
            {teamTwo}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
