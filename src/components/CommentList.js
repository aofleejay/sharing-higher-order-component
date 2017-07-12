import React, { Component } from 'react'
import Loading from './Loading'
import withLoading from '../hocs/withLoading'

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

export default withLoading(CommentList)
