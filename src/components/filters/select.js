import React, { Component } from 'react'
import Select from 'react-select'
import connect from 'react-redux/es/connect/connect'
import { selectArticles } from '../../action-creators'

class SelectFilter extends Component {
  render() {
    return (
      <Select options={this.options} onChange={this.selectArticles} isMulti />
    )
  }

  selectArticles = (selected) => {
    this.props.selectArticles(selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default connect(
  null,
  (dispatch) => ({
    selectArticles: (selected) => dispatch(selectArticles(selected))
  })
)(SelectFilter)
