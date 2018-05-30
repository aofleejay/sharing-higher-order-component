import React, { Component } from 'react'
import axios from 'axios'
import CommentList from '../components/CommentList'

class CommentListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      comments: [],
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true }, this.fetchComments)
  }

  fetchComments() {
    axios.get('http://localhost:3000/comments')
      .then(response => response.data)
      .then(comments => { this.setState({ comments, isLoading: false }) })
      .catch(() => { this.setState({ comments: [], isLoading: false }) })
  }

  render() {
    return (
      <CommentList
        isLoading={this.state.isLoading}
        comments={this.state.comments}
      />
    )
  }
}

export default CommentListContainer
