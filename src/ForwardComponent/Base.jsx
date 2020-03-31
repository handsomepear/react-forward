import React, { Component } from 'react'

class Base extends Component {
  constructor(props){
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
      .then(gists => this.setState({gists}))
      .catch(console.error)
      .finally(() => this.setState({loading: false}))
  }

  clickList = () => {

  }

  render() {
    return (
      <div className="page">
        <ul>
          {
            this.loading
            ? "loading"
              : this.state.gists.map(item => {
                return (
                  <li key={item.id} onClick={this.clickList}>
                    <h5>{item.id}</h5>
                    <p>{item.description || "no desc"}</p>
                  </li>
                )
              })
          }
        </ul>
      </div>
    )
  }
}

console.log(Base.prototype)


export default Base