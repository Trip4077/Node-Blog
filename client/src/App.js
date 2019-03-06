import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/users')
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err);
          })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
