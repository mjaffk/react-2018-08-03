import React, { PureComponent } from 'react'
import CommentList from '../comment-list/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './article.css'
import PropTypes from 'prop-types'

class Article extends PureComponent {
  render() {
    const { article, isOpen, index } = this.props
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <button className={`open-article-${index}`} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const { article, isOpen, index } = this.props
    if (!isOpen) return null

    return (
      <section className={`text-${index}`}>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  index: PropTypes.number
}

export default Article
