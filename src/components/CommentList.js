import React, { Component } from 'react'
import withLoading from '../hocs/withLoading'

class CommentList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.comments.map(({ id, body }) => <li key={id}>{body}</li>)
        }
      </ul>
    )
  }
}

export default withLoading(CommentList)
