import React, { Component } from 'react'


// eslint-disable-next-line react/require-render-return
export default class LifeCycle extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  // 当state需要从props初始化时使用 每次render都会调用
  getDerivedStateFromProps() {
  }

  //决定 virtual dom 是否要重绘
  shouldComponentUpdate(nextProps, nextState, nextContext) {
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
  }

  // UI 渲染完成
  componentDidMount() {
  }

  // 每次UI更新的时候
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentWillUnmount() {
  }

  render() {
  }

}

console.log(LifeCycle)