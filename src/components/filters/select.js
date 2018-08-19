import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeSelection } from '../../action-creators'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    selected: PropTypes.array,
    changeSelection: PropTypes.func
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }

  handleChange = (selected) => {
    this.props.changeSelection(selected)
  }

  get options() {
    let options = []

    for (let articleId in this.props.articles) {
      options = [
        ...options,
        {
          label: this.props.articles[articleId].title,
          value: articleId
        }
      ]
    }

    return options
  }
}

export default connect(
  (state) => ({
    selected: state.filters.selected,
    articles: state.articles
  }),
  { changeSelection }
)(SelectFilter)
