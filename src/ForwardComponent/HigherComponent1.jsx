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
        <RawComponent {...this.props} innerWidth={this.state.windowWidth} />
      )
    }
  }
}

// 改名字 将 props名字改为包装组件的state
const withRename = (rawName, newName) => {
  return RawComponent => {
    return class NewComponent extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          [newName]: this.props[rawName]
        }
      }
      componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
          [newName]: nextProps[rawName]
        })
      }

      render() {
        return (
          <RawComponent {...this.props} {...this.state} />
        )
      }
    }
  }
}


const Title = ({ width, name }) => <h1>我是{name},当前浏览器的宽度是{width}</h1>
const TitleWithWindowResize = withWindowResize(
  withRename('innerWidth', 'width')(Title)
)


const Higher1 = createReactClass({
  render() {
    return (
      <TitleWithWindowResize name={'Zps'} />
      // <h1>浏览器区域宽度 = {this.state.innerWidth}</h1>
    )
  }
})


export default Higher1