import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../components/article-list'
import Article from '../components/article'

class ArticlesRoute extends Component {
  static propTypes = {}

  render() {
    console.log('--- ArticlesRoute match', this.props.match)
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    console.log('--- article match', match)
    return match ? (
      <Article id={match.params.id} isOpen key={match.params.id} />
    ) : (
      <h1>Please select an article</h1>
    )
  }
}

export default ArticlesRoute
