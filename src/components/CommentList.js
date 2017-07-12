import React from 'react'
import Loading from './Loading'

const CommentList = (props) => (
  props.comments.length === 0 ?
    <Loading />
  :
    <ul>
      {
        props.comments.map(comment => (
          <li key={comment.body}>{comment.body}</li>
        ))
      }
    </ul>
)

export default CommentList
