import React, { Component } from 'react'

// 逻辑和展现分离

const UnOrderList = function ({ loading, gists }) {
  // 函数式组件 无状态组件
  return (
    <ul>
      {
        loading
          ? "loading"
          : gists.map(item => {
            return (
              <li key={item.id}>
                <h5>{item.id}</h5>
                <p>{item.description || "no desc"}</p>
              </li>
            )
          })
      }
    </ul>
  )
}

// 业务逻辑
class CommitContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      gists: []
    }
  }

  componentDidMount() {
    fetch(
      'https://api.github.com/users/gaearon/gists'
    )
      .then(res => res.json())
      .then(gists => this.setState({ gists }))
      .catch(console.error)
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    return (
      <UnOrderList gists={this.state.gists} loading={this.state.loading} />
    )
  }
}

class Base1 extends Component {

  componentDidMount() {
  }

  clickList = () => {

  }

  render() {
    return (
      <div className="page">
        <CommitContainer />
      </div>
    )
  }
}


export default Base1