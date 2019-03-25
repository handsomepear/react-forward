import React, { Component } from 'react';
import './App.css';
import NoStateComponent from './Examples/NoStateComponent'
import SetState from './Examples/SetState'
import Children from './Examples/Children'
import Base from './ForwardComponent/Base'
import Base1 from './ForwardComponent/Base1'
import MixinApp from './ForwardComponent/MixinExample'
import Higher from './ForwardComponent/HigherComponent'
import Higher1 from './ForwardComponent/HigherComponent1'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<NoStateComponent />*/}
        {/*<hr />*/}
        {/*<SetState />*/}

        {/*<Children>*/}
          {/*<p>1</p>*/}
          {/*<p>2</p>*/}
          {/*<p>3</p>*/}
        {/*</Children>*/}
        {/*<Base/>*/}
        {/*<Base1/>*/}
        {/*<MixinApp />*/}
        <Higher1 />
      </div>
    );
  }
}

export default App;
