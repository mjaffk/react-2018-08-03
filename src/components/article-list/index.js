import React from 'react'
import Article from '../article'
import accordion from '../../decorators/accordion'

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

export default accordion(ArticleList)
