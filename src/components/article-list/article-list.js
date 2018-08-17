import React from 'react'
import { connect } from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import { filteredArticlesSelector } from '../../selectors'

const ArticleList = (props) => {
  props.fetchData && props.fetchData()

  console.log('render ArticleList')

  const articleElements = props.articles.map((article, index) => (
    <li key={article.id} className={'article-container'}>
      <Article
        article={article}
        isOpen={article.id === props.openItemId}
        toggleOpen={props.toggleOpenItem}
        index={index}
      />
    </li>
  ))

  return <ul>{articleElements}</ul>
}

ArticleList.propTypes = {
  fetchData: PropTypes.func
}

export default connect((state) => {
  console.log('connect ArticleList')
  return filteredArticlesSelector(state)
})(accordion(ArticleList))
