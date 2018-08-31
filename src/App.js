import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import ArticlesRoute from './routes/articles'
import CommentsPage from './routes/comments-page'
import Menu, { MenuItem } from './components/menu'

class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <UserForm />
        <Menu>
          <MenuItem to="/articles">Articles</MenuItem>
          <MenuItem to="/filters">Comments</MenuItem>
          <MenuItem to="/counter">Filters</MenuItem>
          <MenuItem to="/comments">Counter</MenuItem>
        </Menu>
        <Switch>
          <Redirect from={'/'} to={'/articles'} exact />
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route
            path="/articles/new"
            render={() => <h1>New Article Form</h1>}
          />
          <Route path="/articles" component={ArticlesRoute} />
          <Route path="/comments" component={CommentsPage} />
          <Route path="/error" render={() => <h1>Error page</h1>} />
          <Route path="*" render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
