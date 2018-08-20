import React from 'react'
import { connect } from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import {
  filteredArticlesSelector,
  loadingArticleSelector
} from '../../selectors'
import { loadAllArticles } from '../../action-creators'
import Loader from '../common/loader'

class ArticleList extends React.PureComponent {
  constructor(props) {
    super(props)
    props.fetchData && props.fetchData()
  }

  render() {
    const {
      articles: { articles, loading },
      openItemId,
      toggleOpenItem
    } = this.props

    if (loading) return <Loader />

    const articleElements = articles.map((article, index) => (
      <li key={article.id} className={'article-container'}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          toggleOpen={toggleOpenItem}
          index={index}
        />
      </li>
    ))

    return <ul>{articleElements}</ul>
  }
}

ArticleList.propTypes = {
  fetchData: PropTypes.func
}

export default connect(
  (state) => ({
    articles: filteredArticlesSelector(state),
    loading: loadingArticleSelector(state)
  }),
  {
    fetchData: loadAllArticles
  }
)(accordion(ArticleList))
