import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Comment from './comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './comment-list.css'
import { loadArticleComments } from '../../action-creators'
import { connect } from 'react-redux'
import Loader from '../common/loader'

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
    const { commentsIdList, articleId, isOpen, comments } = this.props

    const commentForm = <CommentForm articleId={articleId} />

    if (!isOpen) return null

    if (!commentsIdList.length)
      return (
        <div>
          <h3>No comments yet</h3>
          {commentForm}
        </div>
      )

    const isLoaded = commentsIdList.reduce(
      (isLoaded, id) => isLoaded && !!comments.getIn(['entities', id]),
      true
    )

    if (!isLoaded || comments.get('entities').length === 0) {
      if (!comments.loading) this.props.fetchData(articleId)
      return <Loader />
    }

    const commentList = comments.get('entities').toArray()

    const body = (
      <ul>
        {commentList.map((comment) => (
          <li className={'comment-container'} key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    )

    return (
      <div>
        {body}
        {commentForm}
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

export default connect(
  (state) => ({
    comments: state.comments
  }),
  (dispatch) => ({
    fetchData: (articleId) => dispatch(loadArticleComments(articleId))
  })
)(toggleOpen(CommentList))
