import React, { Component } from 'react'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticlePage from './components/routes/articles'
import CommentPage from './components/routes/comments'

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
          <li>
            <NavLink to={'/comments/1'} activeStyle={{ color: 'red' }}>
              comments
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>Add new article</h1>} />
          <Route path="/articles" render={this.getArticles} />
          <Route path="/comments" render={this.getComments} />
        </Switch>
      </div>
    )
  }

  getArticles = ({ match }) => {
    console.log('App match', match)
    return <ArticlePage />
  }

  getComments = ({ match }) => {
    console.log('Comments match', match)
    return <CommentPage />
  }
}

export default App
