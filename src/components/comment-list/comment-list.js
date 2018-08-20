import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Comment from './comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './comment-list.css'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button data-automation-id="open-comments" onClick={toggleOpen}>
          {text}
        </button>
        <ReactCSSTransitionGroup
          transitionName="comment-list"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const {
      article: { comments = [], id },
      isOpen
    } = this.props

    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((id) => (
          <li className={'comment-container'} key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return (
      <div>
        {body}
        <CommentForm articleId={id} />
      </div>
    )
  }
}

CommentList.defaultProps = {
  article: {}
}

CommentList.propTypes = {
  article: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)
