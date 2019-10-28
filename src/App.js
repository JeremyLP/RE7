import React from 'react';
import './App.css';
import DisplayEmployee from './DisplayEmployee';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: "null"
      
    };
    
    
    this.getEmployee = this.getEmployee.bind(this);
  }
  getEmployee() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          employee: data[0],
        });
    });
  }
  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>Get quote</button>
      </div>
    );
  }
}

export default App;
