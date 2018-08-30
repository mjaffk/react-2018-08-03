import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import connect from 'react-redux/es/connect/connect'
import { loadAllComments } from '../../action-creators'
import toggleOpen from '../../decorators/toggleOpen'
import Comment from '../comment'

const LIMIT_OF_DISPLAYED_COMMENT = 5

class CommentPage extends Component {
  state = {
    openPage: null,
    loadedPages: [],
    offset: 0
  }

  render() {
    return (
      <div>
        <Route path="/comments/:page" render={this.getComments} />
      </div>
    )
  }

  getComments = ({ match }) => {
    const { comments, offset } = this.props
    const { page } = match.param

    setState({
      openPage: page
    })

    const begin = (page - 1) * offset
    const end = begin + LIMIT_OF_DISPLAYED_COMMENT + 1

    return comments
      .get('entities')
      .toArray()
      .slice(begin, end)
      .map((comment) => {
        return <Comment comment={comment} />
      })
  }

  componentDidMount() {
    if (this.props.loadedPages.includes(this.prop, page)) {
      return null
    }

    setState({ loadedPages: [...this.props.loadedPages, page] })
    this.loadComments()
  }

  loadComments = () => {
    const { comments } = this.props

    let numberOfComments = comments.get('total') || 0

    const numberOfPages = parseInt(
      numberOfComments / LIMIT_OF_DISPLAYED_COMMENT
    )

    this.props.offset = numberOfPages * (page - 1) || 0

    if (!comments.get('loaded')) {
      console.log(LIMIT_OF_DISPLAYED_COMMENT, offset)
      this.props.loadAllComments(LIMIT_OF_DISPLAYED_COMMENT, offset)
    }
    return {}
  }
}

export default connect(
  (state) => ({
    comments: state.comments
  }),
  {
    loadAllComments
  }
)(toggleOpen(CommentPage))
