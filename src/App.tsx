import React from 'react';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';

class Team extends React.Component {
  render() {
    return (
      <div>
        {jsonData.teams.map((team, index) => (
          <div key={index} className="container">
            <div className="row">
              <div className="col-4">
                <h5>School Name:</h5> <p>{team.school}</p>
                <h5>Mascot Name:</h5> <p>{team.name}</p>
                <h5>Location:</h5>{' '}
                <p>
                  {team.city}, {team.state}
                </p>
                <br></br>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function Heading() {
  return (
    <div>
      <h1>About this Website</h1>
      <p>
        This Website lists out information about all the colleges in NCAA
        Basketball.
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div>
      <Team />
      <Team />
      <Team />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Heading />

      <TeamList />
    </div>
  );
}

export default App;
