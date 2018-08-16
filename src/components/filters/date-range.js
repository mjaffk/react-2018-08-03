import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import connect from 'react-redux/es/connect/connect'
import { selectedDate } from '../../action-creators'
import DateRangeOutput from './date-output'

class DateRange extends Component {
  render() {
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) =>
            DateUtils.isDayInRange(day, {
              from: this.props.from,
              to: this.props.to
            })
          }
          onDayClick={this.selectedDate}
        />
        <DateRangeOutput from={this.props.from} to={this.props.to} />
      </div>
    )
  }

  selectedDate = (day) => this.props.selectedDate(day)
}

export default connect(
  (state) => ({
    from: state.selectedDate.from,
    to: state.selectedDate.to
  }),
  (dispatch) => ({
    selectedDate: (day) => dispatch(selectedDate(day))
  })
)(DateRange)
