import React from 'react'
import { connect } from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import { filteredArticlesSelector } from '../../selectors'

const ArticleList = (props) => {
  props.fetchData && props.fetchData()

  console.log('render ArticleList')

  let articleElements = []

  for (let articleId in props.articles) {
    articleElements = [
      ...articleElements,
      <li key={articleId} className={'article-container'}>
        <Article
          article={props.articles[articleId]}
          isOpen={articleId === props.openItemId}
          toggleOpen={props.toggleOpenItem}
        />
      </li>
    ]
  }

  return <ul>{articleElements}</ul>
}

ArticleList.propTypes = {
  fetchData: PropTypes.func
}

export default connect((state) => {
  console.log('connect ArticleList')
  return filteredArticlesSelector(state)
})(accordion(ArticleList))
