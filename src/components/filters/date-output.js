import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { selectArticlesByDate } from '../../action-creators'

class DateRangeOutput extends Component {
  render() {
    const selectedRange =
      this.props.from && this.props.to
        ? `${moment(this.props.from).format('ll')} - ${moment(
            this.props.to
          ).format('ll')}`
        : ''
    return <div onClick={this.selectArticlesByDate}>{selectedRange}</div>
  }

  selectArticlesByDate = () =>
    this.props.selectArticlesByDate(this.props.from, this.props.to)
}

export default connect(
  null,
  (dispatch) => ({
    selectArticlesByDate: (from, to) => dispatch(selectArticlesByDate(from, to))
  })
)(DateRangeOutput)
