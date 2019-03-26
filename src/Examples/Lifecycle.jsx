import React, { Component } from 'react'


class Lifecycle extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 1 }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.counter <= 10;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentWillUnmount() {
  }
  handleButtonClick = () => {
    this.setState(prevState => {
      return {counter: prevState.counter + 1}
    })
  }
  render() {
    return(
      <div>
        <button onClick={this.handleButtonClick}>{this.state.counter}</button>
      </div>
    )
  }

}


export default Lifecycle