import React from 'react'
import { connect } from 'react-redux'
import { createCommentSelector } from '../../selectors'

function Comment({ commentProp }) {
  return (
    <div>
      {commentProp.text} <b>by {commentProp.user}</b>
    </div>
  )
}

const createMapsToProps = () => {
  const memoizedSelector = createCommentSelector()

  return (state, ownProps) => {
    return memoizedSelector(state, ownProps)
  }
}

export default connect(createMapsToProps)(Comment)
