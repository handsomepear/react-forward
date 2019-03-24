import React, {Component} from 'react'

const ListComponent  = props => {
  const {list} = props
  return (
    <ul>
      {list.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  )
}

class NoState extends Component {
  state = {
    list: [{id: 0, text: 'apple'},{id: 1, text: 'pear'},{id: 2, text: 'banana'}]
  }
  render() {
    return (
      <div className="page">
        <ListComponent list={this.state.list}/>
      </div>
    )
  }
}


export default NoState



