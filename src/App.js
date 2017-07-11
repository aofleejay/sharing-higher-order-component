import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/comments').then(res => this.setState({ comments: res.data }))
  }

  render() {
    return (
      <div>
        {
          this.state.comments.map(comment => (
            <div>{comment.body}</div>
          ))
        }
      </div>
    )
  }
}

export default App
