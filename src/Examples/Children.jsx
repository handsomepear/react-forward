import React, { Component } from 'react';

// 希望以数组的形式去处理子组件
class Children extends Component {
  render() {
    // const children = this.props.children
    const children = React.Children.toArray(this.props.children) // 可以将子组件直接转为数组来处理
    return (
      <div className="App">
        <p>一共有{React.Children.count(this.props.children)}个子元素</p>
        {React.Children.map(children, (child, i) => {
          // 过滤第一个子元素
          if( i < 1) return
          return child
        })}
      </div>
    );
  }
}

export default Children;
