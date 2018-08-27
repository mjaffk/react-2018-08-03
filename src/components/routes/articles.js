import React, { Component } from 'react'
import ArticleList from '../article-list'
import Article from '../article'
import { Route } from 'react-router-dom'

class ArticlesPage extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    console.log('MATCH', match)
    return <Article id={match.params.id} key={match.params.id} isOpen />
  }
}

export default ArticlesPage
