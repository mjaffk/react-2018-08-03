import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <ul>
          <li>
            <NavLink to={'/counter'} activeStyle={{ color: 'red' }}>
              counter
            </NavLink>
          </li>
          <li>
            <NavLink to={'/filters'} activeStyle={{ color: 'red' }}>
              filters
            </NavLink>
          </li>
          <li>
            <NavLink to={'/articles'} activeStyle={{ color: 'red' }}>
              articles
            </NavLink>
          </li>
        </ul>
        <Route path="/counter" component={Counter} />
        <Route path="/filters" component={Filters} />
        <Route path="/articles" component={ArticleList} />
      </div>
    )
  }
}

export default App
