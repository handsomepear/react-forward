import React from 'react'
import createReactClass from 'create-react-class'

const WindowResizeMixin = {
  // 问题点：变量重命名，函数重命名
  // 各个mixin之间的依赖
  // 改变了组件内部的状态
  getInitialState() {
    return { innerWidth: window.innerWidth }
  },
  componentDidMount() {
    // console.log(456)
    window.addEventListener('resize', this.handleResize)
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  handleResize() {
    console.log(123)
    this.setState({ innerWidth: window.innerWidth })
  }
}

const MixinApp = createReactClass({
  mixins: [WindowResizeMixin],
  render(){
    return (
      <h1>浏览器区域宽度 = {this.state.innerWidth}</h1>
    )
  }
})


export default MixinApp