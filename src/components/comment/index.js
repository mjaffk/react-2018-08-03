import React from 'react'

function Comment({ comment }) {
  return (
    <div data-automation-id="comment">
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

export default Comment
