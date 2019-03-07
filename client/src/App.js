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
            this.setState({ users: res.data })
          })
          .catch(err => {
            console.log(err);
          });

          axios.get('http://localhost:5000/api/posts')
          .then(res => {
            this.setState({ posts: res.data })
          })
          .catch(err => {
            console.log(err);
          });

  
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div>
          {this.state.users.map(user => <h2 key={user.id} >{user.id}: {user.name}</h2>)}
        </div>

        <div>
          {this.state.posts.map(post => <h2 key={post.id} >{post.id}/{post.user_id}: {post.text}</h2>)}
        </div>
      </div>
    );
  }
}

export default App;
