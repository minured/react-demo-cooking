import React, { Component } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// Provide组件让容器组件 直接拿到 store的state

const defaultState = {
  num: 1,
};

const reducer = (state = defaultState, action) => {
  return state;
};

const store = createStore(reducer);

// state数据 转成 props数据
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

class ReactReduxDemo extends Component {
 
  render() {
    return (
      // Provider 包裹的组件，可以拿到store的state
      <Provider store={store}>
        <h1>react-redux</h1>
        <p>num from store (using Provider)</p>
        <p>{this.props.num}</p>
      </Provider>
    );
  }
}
export default connect(mapStateToProps, null)(ReactReduxDemo);
