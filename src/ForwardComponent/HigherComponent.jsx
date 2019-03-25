import React from 'react'
import createReactClass from 'create-react-class'

// 高阶组件是用来生成组件的
const withWindowResize = RawComponent => {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = { windowWidth: window.innerWidth }
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
      this.setState({ windowWidth: window.innerWidth })
    }

    render() {
      return (
        <RawComponent {...this.props} innerWidth={this.state.windowWidth}/>
      )
    }
  }
}


const Title = ({ innerWidth, name }) => <h1>我是{name},当前浏览器的宽度是{innerWidth}</h1>
const TitleWithWindowResize = withWindowResize(Title)
// let div;
// const divWithWindowResize = withWindowResize(div)

const Higher = createReactClass({
  render() {
    return (
      <TitleWithWindowResize name={'Zps'}/>
      // <h1>浏览器区域宽度 = {this.state.innerWidth}</h1>
    )
  }
})


export default Higher