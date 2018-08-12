import React, { Component } from 'react'
import Comment from '../comment/index'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './comment-list.css'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button className={'open-comments'} onClick={toggleOpen}>
          {text}
        </button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnter={true}
          transitionLeave={true}
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

CommentList.defaultProps = {
  comments: []
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)
