import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ShowMoney = ({ value, currency }) => {
  return (
    <p>
      {value}
      <small>{currency}</small>
    </p>
  )
}

const CurrencyWrapper = ({ children }) => children('#')
CurrencyWrapper.propTypes = { children: PropTypes.func.isRequired }


class FetchWrapper extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(this.props.url).then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(console.error)
  }

  render() {
    return (
      this.props.children(this.state.data)
    )
  }
}


class FunctionalChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <CurrencyWrapper>
          {/*函数式子组件 可接受参数*/}
          {(currency) => <ShowMoney value={200} currency={currency} />}
        </CurrencyWrapper>
        <FetchWrapper url="https://api.github.com/users/gaearon/gists">
          {data => {
            return data.map(item => {
              return (
                <li style={{ textAlign: 'left', paddingLeft: 20 }} key={item.id}>
                  <h5>{item.id}</h5>
                  <p>
                    {item.description || 'no desc'}
                  </p>
                </li>
              )
            })
          }}
        </FetchWrapper>

      </div>
    )
  }
}


export default FunctionalChild