import React from 'react'
import { connect } from 'react-redux'
import { count } from '../action-creators'

class Counter extends React.PureComponent {
  render() {
    console.log('render Counter')
    return (
      <React.Fragment>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleClick}>Increase</button>
      </React.Fragment>
    )
  }

  handleClick = () => {
    this.props.increase()
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(count())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
