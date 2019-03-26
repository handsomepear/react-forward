import React, { Component } from 'react'

const defaultTheme = '#000'

const ThemeContext = React.createContext(defaultTheme)

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {theme => <button {...props} theme={theme} style={{backgroundColor:theme}}>123</button>}
    </ThemeContext.Consumer>
  )
}

// 中间组件
function Toolbar(props) {
  // Toolbar 组件必须添加一个额外的 theme 属性
  // 然后传递它给 ThemedButton 组件
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ContextExample1 extends Component {
  render() {
    return (
      <ThemeContext.Provider value={'#fff'}>
        <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

export default ContextExample1