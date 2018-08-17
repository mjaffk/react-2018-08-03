import React from 'react'
import { connect } from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'

const ArticleList = (props) => {
  props.fetchData && props.fetchData()

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
  const {
    selected,
    dateRange: { from, to }
  } = state.filters

  const filtratedArticles = state.articles.filter((article) => {
    const published = Date.parse(article.date)
    return (
      (!selected.length ||
        selected.find((selected) => selected.value === article.id)) &&
      (!from || !to || (published > from && published < to))
    )
  })

  return {
    articles: filtratedArticles
  }
})(accordion(ArticleList))
