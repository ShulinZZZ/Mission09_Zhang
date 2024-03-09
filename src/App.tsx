import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap
import './App.css';
import jsonData from './CollegeBasketballTeams.json'; //import json data

class TeamCard extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {jsonData.teams.map((team, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="Card">
                <div className="card-body">
                  <h5 className="card-title">School Name:</h5>
                  <p className="card-text">{team.school}</p>
                  <h5 className="card-title">Mascot Name:</h5>
                  <p className="card-text">{team.name}</p>
                  <h5 className="card-title">Location:</h5>
                  <p className="card-text">
                    {team.city}, {team.state}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
    <div className="container mt-4">
      <div className="row">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
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
