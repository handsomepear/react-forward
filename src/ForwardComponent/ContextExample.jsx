import React, { Component } from 'react'


const ShowMoney = ({value, currency}) => {
  return (
    <p>{value} <small>{currency}</small></p>
  )
}

const CurrencyContext = React.createContext()

class ContextExample extends Component {
  constructor(props) {
    super(props)
    this.state = {currency: '￥'}
  }
  render() {
    return (
      <div>
        <CurrencyContext.Provider value={this.state.currency}>
          <ul>
            {
              [1,2,3].map(num => {
                return (
                  <li key={num}>
                    <CurrencyContext.Consumer>
                      {(value) => {
                        return (
                          <ShowMoney value={num * 10} currency={value}/>
                        )
                      }}
                    </CurrencyContext.Consumer>
                  </li>
                )
              })
            }
          </ul>
        </CurrencyContext.Provider>
      </div>
    )
  }

}

export default ContextExample