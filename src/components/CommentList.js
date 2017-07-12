import React, { Component } from 'react'

class CommentList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.comments.map(comment => <li key={comment.body}>{comment.body}</li>)
        }
      </ul>
    )
  }
}

export default CommentList
