import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Filters from './components/filters/index'
import Counter from './components/counter'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <UserForm />
          <Counter />
          <Filters />
          <ArticleList />
        </div>
      </Provider>
    )
  }
}

export default App
