import React, { Component } from 'react'
import axios from 'axios'
import CommentList from '../components/CommentList'

class CommentListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/comments').then(res => this.setState({ comments: res.data }))
  }

  render() {
    return (
      <CommentList comments={this.state.comments} />
    )
  }
}

export default CommentListContainer
