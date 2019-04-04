import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { increment, decrement } from './redux/action'

@connect(
  state => ({count: state.getIn(['count'])}),
  {increment, decrement}
)
class Counter extends React.Component {

  render() {
    return (
      <div>
        Counter: {this.props.count}
        <Button type="ghost" onClick={this.props.increment}>+11</Button>
        <Button type="ghost" onClick={this.props.decrement}>-</Button>
      </div>
    )
  }
}

export default Counter

