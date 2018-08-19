import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import { addNewComment, deleteArticle } from '../../action-creators'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './article.css'
import moment from 'moment'
import AddCommentForm from '../add-comment-form/add-comment-form'

class Article extends Component {
  render() {
    const { article, isOpen } = this.props
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <div>published {moment(article.date).format('LL')}</div>
        <button className={'open-article'} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button className={'delete-article'} onClick={this.deleteArticle}>
          Delete
        </button>
        <ReactCSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
        <AddCommentForm
          addComment={this.props.addComment}
          articleId={article.id}
        />
      </section>
    )
  }

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)
  deleteArticle = () => this.props.deleteArticle(this.props.article.id)
}

export default connect(
  null,
  (dispatch) => ({
    deleteArticle: (id) => dispatch(deleteArticle(id)),
    addComment: (user, text, articleId) =>
      dispatch(addNewComment(user, text, articleId))
  })
)(Article)
