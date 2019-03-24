import React, { Component } from 'react'


class SetState extends Component {
  state = { counter: 0 }

  /*toggleButton = () => {
    this.setState({
      counter: this.state.counter + 1
    })

    this.setState({
      counter: this.state.counter + 2
    })
    // 同一周期内多次调用setState 会被批量处理,等价于下面的形式，所以之后的调用会重写之前调用的值
    //Object.assign(
    //  previousState,
    //  { counter: this.state.counter + 1 },
    //  { counter: this.state.counter + 1 }
    //)
  }*/
  /*toggleButton = () => {
    setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1
      })

      this.setState({
        counter: this.state.counter + 2
      })
    })
  }*/
  toggleButton = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 }
    })
  }

  render() {
    const counter = this.state.counter
    return (
      <div className="page">
        <button onClick={this.toggleButton}>{counter}</button>
      </div>
    )
  }
}


export default SetState