import React, { Component } from 'react'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Filters from './components/filters/index'

class App extends Component {
  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <Chart articles={articles} />
      </div>
    )
  }
}

export default App
